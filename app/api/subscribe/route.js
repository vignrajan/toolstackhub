// app/api/subscribe/route.js
// POST /api/subscribe

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ── In-memory rate limiter (resets on cold start) ────────────
const rateLimitMap = new Map(); // ip → { count, resetAt }

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return false;
  }
  if (entry.count >= 3) return true;
  entry.count++;
  return false;
}

// ── Vercel KV helpers (graceful fallback if not configured) ──
async function tryKV(email, source, tool, timestamp) {
  try {
    // Dynamically import so the app doesn't crash if KV isn't set up
    const { kv } = await import('@vercel/kv');

    const key = `subscriber:${email.toLowerCase()}`;
    const existing = await kv.get(key);

    if (existing) return { alreadyExists: true };

    await kv.set(key, JSON.stringify({ email, source, tool, timestamp }));

    // Also maintain a sorted set for easy export
    await kv.zadd('subscribers', {
      score: Date.now(),
      member: email.toLowerCase(),
    });

    return { alreadyExists: false, stored: true };
  } catch {
    // KV not configured — log and continue (treat as success)
    console.log('[subscribe] KV not configured. Would store:', { email, source, tool, timestamp });
    return { alreadyExists: false, stored: false, fallback: true };
  }
}

export async function POST(request) {
  try {
    // ── Get client IP ──────────────────────────────────────
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';

    // ── Rate limit ─────────────────────────────────────────
    if (isRateLimited(ip)) {
      return Response.json(
        { success: false, message: 'Too many attempts. Please try again later.' },
        { status: 429 }
      );
    }

    // ── Parse body ─────────────────────────────────────────
    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json(
        { success: false, message: 'Invalid request body.' },
        { status: 400 }
      );
    }

    const { email, source, tool } = body;
    const timestamp = new Date().toISOString();

    // ── Validate email ─────────────────────────────────────
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return Response.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // ── Validate source ────────────────────────────────────
    const validSources = ['pdf_download', 'newsletter'];
    if (!source || !validSources.includes(source)) {
      return Response.json(
        { success: false, message: 'Invalid source.' },
        { status: 400 }
      );
    }

    // ── Store in KV ────────────────────────────────────────
    const result = await tryKV(email.trim().toLowerCase(), source, tool || null, timestamp);

    if (result.alreadyExists) {
      return Response.json(
        { success: true, message: "You're already subscribed!" },
        { status: 200 }
      );
    }

    const message = source === 'pdf_download'
      ? "We've saved your email. Your PDF is ready!"
      : "You're in! We'll notify you when new tools launch.";

    return Response.json({ success: true, message }, { status: 200 });

  } catch (err) {
    console.error('[subscribe] Unexpected error:', err);
    return Response.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}