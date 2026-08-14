import { Star } from 'lucide-react';

export default function StarRating({
  rating = 5,
  size = 16,
  className = '',
}: {
  rating?: number;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className={i < Math.round(rating) ? 'fill-[#FBBC04] text-[#FBBC04]' : 'fill-neutral-300 text-neutral-300'}
        />
      ))}
    </div>
  );
}
