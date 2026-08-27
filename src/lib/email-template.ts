import { site } from '@/data/site';

export const escapeHtml = (value: string) =>
  value.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' })[c] as string);

/**
 * Shared branded wrapper for transactional emails — mirrors the site's look
 * (Arial, brand orange, dark ink) so the inbox experience matches the website.
 * Table-based layout with inline styles for email client compatibility.
 */
export function emailShell({ preheader, body }: { preheader: string; body: string }) {
  const logoUrl = `${site.url}/images/logo-header.png`;

  return `<!doctype html>
<html lang="en-GB">
  <body style="margin:0;padding:0;background-color:#E8E9E9;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#E8E9E9;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#FFFFFF;border-top:4px solid #EE7C3B;">
            <tr>
              <td align="center" style="padding:32px 40px 8px;">
                <img src="${logoUrl}" width="150" alt="${escapeHtml(site.name)}" style="display:block;width:150px;height:auto;border:0;" />
              </td>
            </tr>
            <tr>
              <td style="padding:8px 40px 40px;color:#111111;font-size:15px;line-height:1.7;">
                ${body}
              </td>
            </tr>
            <tr>
              <td style="background-color:#111111;padding:24px 40px;">
                <p style="margin:0;color:#FFFFFF;font-size:13px;font-weight:bold;">${escapeHtml(site.name)}</p>
                <p style="margin:6px 0 0;color:#B8B8B8;font-size:13px;line-height:1.6;">
                  <a href="tel:${site.phone}" style="color:#F1904F;text-decoration:none;">${escapeHtml(site.phoneDisplay)}</a>
                  &nbsp;&middot;&nbsp;
                  <a href="mailto:${site.email}" style="color:#F1904F;text-decoration:none;">${escapeHtml(site.email)}</a>
                </p>
                <p style="margin:6px 0 0;color:#B8B8B8;font-size:13px;">
                  <a href="${site.url}" style="color:#B8B8B8;text-decoration:none;">${site.url.replace(/^https?:\/\//, '')}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function fieldRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:6px 0;font-size:13px;font-weight:bold;color:#5A5A5A;text-transform:uppercase;letter-spacing:0.04em;width:110px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:6px 0;font-size:15px;color:#111111;vertical-align:top;">${value}</td>
    </tr>`;
}
