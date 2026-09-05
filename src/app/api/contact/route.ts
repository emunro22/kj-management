import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { site } from '@/data/site';
import { emailShell, escapeHtml, fieldRow } from '@/lib/email-template';

export const runtime = 'nodejs';

type Payload = {
  // compact form (homepage)
  firstName?: string;
  lastName?: string;
  // full form (contact page)
  name?: string;
  phone?: string;
  subject?: string;
  // both
  email?: string;
  message?: string;
  consent?: string;
  company?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot filled: pretend it worked, drop the message.
  if (body.company) return NextResponse.json({ ok: true });

  const fullName =
    body.name?.trim() || [body.firstName?.trim(), body.lastName?.trim()].filter(Boolean).join(' ');
  const email = body.email?.trim() ?? '';
  const message = body.message?.trim() ?? '';
  const phone = body.phone?.trim() ?? '';
  const subject = body.subject?.trim() ?? '';

  if (!fullName || !message) {
    return NextResponse.json({ error: 'Please complete every required field.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: 'That message is too long.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set');
    return NextResponse.json(
      { error: `Email is not configured yet. Please write to ${site.email}.` },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const fromAddress = process.env.CONTACT_FROM_EMAIL ?? `Website <onboarding@resend.dev>`;
  const firstName = fullName.split(' ')[0];

  const notificationHtml = emailShell({
    preheader: `New website enquiry from ${fullName}`,
    body: `
      <h1 style="margin:0 0 20px;font-size:20px;color:#EE7C3B;">New website enquiry</h1>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
        ${fieldRow('Name', escapeHtml(fullName))}
        ${fieldRow('Email', `<a href="mailto:${email}" style="color:#EE7C3B;text-decoration:none;">${escapeHtml(email)}</a>`)}
        ${phone ? fieldRow('Phone', escapeHtml(phone)) : ''}
        ${subject ? fieldRow('Subject', escapeHtml(subject)) : ''}
      </table>
      <p style="margin:0 0 8px;font-size:13px;font-weight:bold;color:#5A5A5A;text-transform:uppercase;letter-spacing:0.04em;">Message</p>
      <p style="white-space:pre-wrap;margin:0;background:#F5F5F5;padding:16px;border-left:3px solid #EE7C3B;font-size:15px;line-height:1.7;">${escapeHtml(message)}</p>
    `,
  });

  const autoReplyHtml = emailShell({
    preheader: `Thanks for getting in touch with ${site.name}. We'll reply within one working day.`,
    body: `
      <h1 style="margin:0 0 20px;font-size:20px;color:#EE7C3B;">Thanks for your message</h1>
      <p style="margin:0 0 16px;">Hi ${escapeHtml(firstName)},</p>
      <p style="margin:0 0 16px;">Thanks for getting in touch with ${escapeHtml(site.name)}. We've received your message and one of us will get back to you within one working day.</p>
      <p style="margin:0 0 24px;">If anything's urgent in the meantime, you can reach us directly on <a href="tel:${site.phone}" style="color:#EE7C3B;text-decoration:none;font-weight:bold;">${escapeHtml(site.phoneDisplay)}</a> or just reply to this email.</p>
      <p style="margin:0;">Speak soon,<br>${escapeHtml(site.founders)}<br><span style="color:#5A5A5A;">${escapeHtml(site.name)}</span></p>
    `,
  });

  try {
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [process.env.CONTACT_TO_EMAIL ?? site.email],
      replyTo: email,
      subject: subject ? `Website enquiry: ${subject}` : `New enquiry from ${fullName}`,
      html: notificationHtml,
    });

    if (error) throw new Error(error.message);

    // Auto-reply to the customer: best-effort, doesn't fail the request if it errors.
    resend.emails
      .send({
        from: fromAddress,
        to: [email],
        replyTo: process.env.CONTACT_TO_EMAIL ?? site.email,
        subject: `Thanks for getting in touch, ${firstName}`,
        html: autoReplyHtml,
      })
      .catch((err) => console.error('[contact] auto-reply failed:', err));

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contact] send failed:', error);
    return NextResponse.json(
      { error: `Could not send right now. Please email ${site.email}.` },
      { status: 502 },
    );
  }
}
