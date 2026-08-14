import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-kj flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl text-ink">That page has moved or never existed</h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-muted">
        Head back to the homepage, or get in touch and we will point you in the right direction.
      </p>
      <Link href="/" className="btn-brand mt-8">
        Back to home
      </Link>
    </div>
  );
}
