/**
 * Repeating zigzag teeth that overlay the *end* of the section above, so the
 * band below (e.g. the dark "Send Message" section) reads as having a jagged
 * top edge. Must be absolutely positioned by the caller, pulled up by its own
 * height so it paints over the previous section rather than sitting inside
 * this one (a child SVG's transparent gaps would just reveal this section's
 * own background instead of the one above).
 */
export default function ZigzagDivider({
  color = '#0A0A0A',
  className = '',
}: {
  color?: string;
  className?: string;
}) {
  const teeth = 130;
  const points: string[] = [];
  for (let i = 0; i <= teeth; i++) {
    const x = (i / teeth) * 1440;
    const y = i % 2 === 0 ? 0 : 6;
    points.push(`${x} ${y}`);
  }
  const d = `M0 6 L${points.join(' L')} L1440 6 Z`;

  return (
    <svg
      viewBox="0 0 1440 6"
      preserveAspectRatio="none"
      className={`block h-[5px] w-full sm:h-[7px] ${className}`}
      aria-hidden="true"
    >
      <path d={d} fill={color} />
    </svg>
  );
}
