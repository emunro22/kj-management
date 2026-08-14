import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { site } from '@/data/site';

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

  // Honeypot filled — pretend it worked, drop the message.
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
  const escape = (value: string) =>
    value.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' })[c] as string);

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? `Website <onboarding@resend.dev>`,
      to: [process.env.CONTACT_TO_EMAIL ?? site.email],
      replyTo: email,
      subject: subject ? `Website enquiry: ${subject}` : `New enquiry from ${fullName}`,
      html: `
        <div style="font-family:Arial,sans-serif;font-size:15px;color:#111">
          <h2 style="color:#EE7C3B;margin:0 0 16px">New website enquiry</h2>
          <p><strong>Name:</strong> ${escape(fullName)}</p>
          <p><strong>Email:</strong> ${escape(email)}</p>
          ${phone ? `<p><strong>Phone:</strong> ${escape(phone)}</p>` : ''}
          ${subject ? `<p><strong>Subject:</strong> ${escape(subject)}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap;background:#f6f6f6;padding:14px;border-left:3px solid #EE7C3B">${escape(
            message,
          )}</p>
        </div>
      `,
    });

    if (error) throw new Error(error.message);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contact] send failed:', error);
    return NextResponse.json(
      { error: `Could not send right now. Please email ${site.email}.` },
      { status: 502 },
    );
  }
}
