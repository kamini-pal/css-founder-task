import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: number;
}

export default function StarRating({ rating, size = 16 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < Math.floor(rating)
              ? 'fill-star text-star'
              : 'fill-none text-gray-300'
          }
        />
      ))}
    </div>
  );
}
