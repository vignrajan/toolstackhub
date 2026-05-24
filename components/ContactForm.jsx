'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [form,   setForm]   = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="lg:col-span-2 bg-white border border-surface-200 rounded-2xl p-6">
      <h2 className="font-display font-bold text-xl text-surface-900 mb-5">Send a Message</h2>

      {status === 'sent' ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">✅</div>
          <div className="font-bold text-surface-900 text-lg mb-2">Message Sent!</div>
          <p className="text-surface-500 text-sm">Thank you for reaching out. We will get back to you within 48 hours.</p>
          <button onClick={() => setStatus(null)} className="mt-5 text-sm text-brand-700 hover:underline">Send another message</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-surface-600 block mb-1.5">Full Name *</label>
              <input type="text" required value={form.name}
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                placeholder="Your name"
                className="w-full text-sm border border-surface-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 bg-surface-50" />
            </div>
            <div>
              <label className="text-xs font-semibold text-surface-600 block mb-1.5">Email Address *</label>
              <input type="email" required value={form.email}
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                placeholder="your@email.com"
                className="w-full text-sm border border-surface-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 bg-surface-50" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-surface-600 block mb-1.5">Subject</label>
            <select value={form.subject}
              onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
              className="w-full text-sm border border-surface-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 bg-surface-50">
              <option value="">Select a topic...</option>
              <option>Bug Report</option>
              <option>Tool Suggestion</option>
              <option>Business Enquiry</option>
              <option>General Question</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-surface-600 block mb-1.5">Message *</label>
            <textarea required rows={6} value={form.message}
              onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              placeholder="Describe your question, bug, or suggestion in detail..."
              className="w-full text-sm border border-surface-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-400 bg-surface-50 resize-none" />
          </div>

          {status === 'error' && (
            <div className="text-sm text-rose-700 bg-rose-50 border border-rose-200 px-4 py-3 rounded-xl">
              Something went wrong. Please email us directly at hello@toolstackhub.in
            </div>
          )}

          <button type="submit" disabled={status === 'sending'}
            className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-bold text-sm py-3 rounded-xl transition-colors">
            {status === 'sending' ? 'Sending...' : 'Send Message →'}
          </button>

          <p className="text-[10px] text-surface-400 text-center">
            By submitting this form, you agree to our{' '}
            <Link href="/privacy" className="underline">Privacy Policy</Link>.
            We never share your information with third parties.
          </p>
        </form>
      )}
    </div>
  );
}
