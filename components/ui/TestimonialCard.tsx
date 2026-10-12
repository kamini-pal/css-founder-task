import Image from 'next/image';
import { Quote } from 'lucide-react';
import type { Testimonial } from '@/types';
import StarRating from './StarRating';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Stars */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} size={16} />
      </div>

      {/* Quote */}
      <blockquote className="text-sm text-text leading-relaxed mb-6 relative">
        <Quote size={20} className="text-primary/20 absolute -top-1 -left-1" />
        <p className="pl-5">{testimonial.quote}</p>
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-heading">{testimonial.name}</p>
          <p className="text-xs text-text-light">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
