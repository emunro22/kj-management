import Image from 'next/image';

/**
 * The real logo exported from WordPress.
 * `scripts/fetch-wp-assets.mjs` places it at /images/logo-header.png
 * (KJ-Management-Logo.png) and /images/logo-footer.png (KJ-Logo-1.png).
 */
export default function Logo({
  className = '',
  variant = 'header',
}: {
  className?: string;
  variant?: 'header' | 'footer';
}) {
  const src = variant === 'header' ? '/images/logo-header.png' : '/images/logo-footer.png';

  return (
    <Image
      src={src}
      alt="KJ Management Accounting Solutions"
      width={280}
      height={104}
      priority={variant === 'header'}
      className={`w-auto object-contain ${className}`}
    />
  );
}
