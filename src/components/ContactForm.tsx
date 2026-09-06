'use client';

import { useState, type FormEvent } from 'react';
import { Loader2 } from 'lucide-react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

/**
 * `compact` matches the homepage form (first/last/email/message).
 * `full` matches the contact page form (name/phone/email/subject/message).
 */
export default function ContactForm({
  variant = 'compact',
  theme = 'brand',
}: {
  variant?: 'compact' | 'full';
  theme?: 'brand' | 'light';
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const onBrand = theme === 'brand';

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus('sending');
    setMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) throw new Error(json.error ?? 'Message could not be sent.');

      setStatus('sent');
      setMessage('Thanks, your message is on its way. We usually reply within one working day.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error
          ? error.message
          : 'Message could not be sent. Email us directly instead.',
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`relative ${onBrand ? 'bg-brand' : 'bg-white shadow-card'} p-7 sm:p-9`}
      noValidate
    >
      {/* Honeypot: bots fill this, humans never see it */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-0 w-0 opacity-0"
      />

      {variant === 'compact' ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="firstName" label="First Name" autoComplete="given-name" required />
            <Field name="lastName" label="Last Name" autoComplete="family-name" required />
          </div>
          <div className="mt-4">
            <Field name="email" label="Email Address" type="email" autoComplete="email" required />
          </div>
        </>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Name" autoComplete="name" required />
            <Field name="phone" label="Phone" type="tel" autoComplete="tel" />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field name="email" label="Email" type="email" autoComplete="email" required />
            <Field name="subject" label="Subject" />
          </div>
        </>
      )}

      <div className="mt-4">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Message"
          className="w-full resize-y bg-neutral-100 px-4 py-3.5 text-ink placeholder:text-neutral-500 focus:bg-white"
        />
      </div>

      {variant === 'compact' ? (
        <div className="mt-5 flex items-start gap-2.5">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 shrink-0 accent-black"
          />
          <label
            htmlFor="consent"
            className={`text-[15px] font-medium leading-snug ${onBrand ? 'text-white' : 'text-ink-soft'}`}
          >
            By clicking sign up you are agreeing to the{' '}
            <a
              href="/terms"
              className={onBrand ? 'text-yellow-300 underline underline-offset-2' : 'text-brand underline underline-offset-2'}
            >
              terms of use
            </a>{' '}
            and acknowledging the{' '}
            <a
              href="/privacy-policy"
              className={onBrand ? 'text-yellow-300 underline underline-offset-2' : 'text-brand underline underline-offset-2'}
            >
              privacy policy
            </a>
            .
          </label>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        className={`mt-6 flex w-full items-center justify-center gap-2 py-4 font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-70 ${
          onBrand ? 'bg-ink hover:bg-black' : 'bg-brand hover:bg-brand-600'
        }`}
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Sending
          </>
        ) : variant === 'compact' ? (
          'Send Message'
        ) : (
          'Submit'
        )}
      </button>

      {message ? (
        <p
          role="status"
          aria-live="polite"
          className={`mt-4 text-[15px] font-medium ${
            onBrand
              ? status === 'error'
                ? 'text-yellow-200'
                : 'text-white'
              : status === 'error'
                ? 'text-red-600'
                : 'text-green-700'
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  name,
  label,
  type = 'text',
  autoComplete,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={label}
        className="w-full bg-neutral-100 px-4 py-3.5 text-ink placeholder:text-neutral-500 focus:bg-white"
      />
    </div>
  );
}
