// lib/generatePDF.js
// Browser-based PDF generation using window.print()
// No external library required — works on all devices

export function generatePDF(data) {
    const { title, subtitle, date, sections, footer } = data;
  
    // ── Build summary HTML ──────────────────────────────────
    function renderSection(section) {
      if (section.type === 'summary') {
        const rows = section.data
          .map(({ label, value }) => `
            <tr>
              <td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:500;color:#374151;background:#f9fafb;width:45%">${label}</td>
              <td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:700;color:#111827;font-family:monospace">${value}</td>
            </tr>
          `).join('');
        return `
          <section style="margin-bottom:28px">
            <h2 style="font-size:14px;font-weight:700;color:#1e40af;margin:0 0 10px;padding-bottom:6px;border-bottom:2px solid #dbeafe">
              ${section.heading}
            </h2>
            <table style="width:100%;border-collapse:collapse;font-size:13px">${rows}</table>
          </section>
        `;
      }
  
      if (section.type === 'table' && Array.isArray(section.data) && section.data.length > 0) {
        const keys = Object.keys(section.data[0]);
        const header = keys.map(k => `
          <th style="padding:8px 10px;background:#1e40af;color:#fff;text-align:right;font-size:11px;font-weight:600;white-space:nowrap">
            ${k}
          </th>
        `).join('');
        const rows = section.data.map((row, i) => {
          const isHighlight = (i + 1) % 5 === 0; // highlight every 5th row
          const cells = keys.map(k => `
            <td style="padding:6px 10px;border:1px solid #e2e8f0;text-align:right;font-family:monospace;font-size:11px;color:${isHighlight ? '#1e40af' : '#374151'};${isHighlight ? 'font-weight:700;background:#eff6ff' : ''}">
              ${row[k] ?? ''}
            </td>
          `).join('');
          return `<tr>${cells}</tr>`;
        }).join('');
        return `
          <section style="margin-bottom:28px">
            <h2 style="font-size:14px;font-weight:700;color:#1e40af;margin:0 0 10px;padding-bottom:6px;border-bottom:2px solid #dbeafe">
              ${section.heading}
            </h2>
            <div style="overflow-x:auto">
              <table style="width:100%;border-collapse:collapse;font-size:11px">
                <thead><tr>${header}</tr></thead>
                <tbody>${rows}</tbody>
              </table>
            </div>
          </section>
        `;
      }
  
      return '';
    }
  
    // ── Assemble full HTML document ─────────────────────────
    const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        color: #111827;
        background: #ffffff;
        padding: 32px 40px;
        max-width: 900px;
        margin: 0 auto;
      }
  
      /* ── Header ── */
      .pdf-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        border-bottom: 3px solid #1e40af;
        padding-bottom: 16px;
        margin-bottom: 24px;
      }
      .pdf-brand {
        font-size: 13px;
        font-weight: 700;
        color: #1e40af;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }
      .pdf-brand-sub {
        font-size: 11px;
        color: #6b7280;
        margin-top: 2px;
      }
      .pdf-meta {
        text-align: right;
        font-size: 12px;
        color: #6b7280;
      }
      .pdf-title {
        font-size: 22px;
        font-weight: 800;
        color: #111827;
        margin-bottom: 4px;
      }
      .pdf-subtitle {
        font-size: 13px;
        color: #6b7280;
        margin-bottom: 24px;
      }
  
      /* ── Footer ── */
      .pdf-footer {
        margin-top: 36px;
        padding-top: 12px;
        border-top: 1px solid #e2e8f0;
        font-size: 10px;
        color: #9ca3af;
        text-align: center;
      }
  
      /* ── Print styles ── */
      @media print {
        body { padding: 20px 28px; }
        @page { margin: 1cm; size: A4; }
        thead { display: table-header-group; }
        section { page-break-inside: avoid; }
      }
    </style>
  </head>
  <body>
  
    <!-- Header -->
    <div class="pdf-header">
      <div>
        <div class="pdf-brand">ToolStackHub</div>
        <div class="pdf-brand-sub">toolstackhub.in — Free Online Tools</div>
      </div>
      <div class="pdf-meta">
        <div>${date}</div>
        <div style="margin-top:2px;color:#9ca3af">${subtitle}</div>
      </div>
    </div>
  
    <!-- Title -->
    <div class="pdf-title">${title}</div>
    <div class="pdf-subtitle">Generated on ${date}</div>
  
    <!-- Sections -->
    ${sections.map(renderSection).join('')}
  
    <!-- Footer -->
    <div class="pdf-footer">${footer}</div>
  
    <!-- Auto-trigger print -->
    <script>
      window.onload = function() {
        setTimeout(function() { window.print(); }, 400);
      };
    </script>
  </body>
  </html>`;
  
    // ── Open in new window and trigger print dialog ─────────
    const win = window.open('', '_blank', 'width=900,height=700');
    if (!win) {
      alert('Pop-up blocked. Please allow pop-ups for ToolStackHub to download your PDF.');
      return;
    }
    win.document.write(html);
    win.document.close();
  }