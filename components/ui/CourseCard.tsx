import Image from 'next/image';
import { Users } from 'lucide-react';
import type { Course } from '@/types';
import StarRating from './StarRating';
import Button from './Button';

const badgeColorMap: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-emerald-100 text-emerald-700',
  purple: 'bg-purple-100 text-purple-700',
  teal: 'bg-teal-100 text-teal-700',
};

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Badge overlays */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeColorMap[course.categoryColor]}`}>
            {course.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating row */}
        <div className="flex items-center gap-2 mb-2">
          <StarRating rating={course.rating} size={14} />
          <span className="text-xs text-text-light font-medium">{course.rating}</span>
          <span className="text-xs text-text-light">
            <Users size={12} className="inline mr-0.5" />
            {course.reviews} Students
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-heading leading-snug mb-3 line-clamp-2">
          {course.title}
        </h3>

        <p className="text-xs text-text-light mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">${course.price}</span>
            {course.originalPrice && (
              <span className="text-sm text-text-light line-through">${course.originalPrice}</span>
            )}
          </div>
          <Button variant="primary" size="sm" href="#">
            Learn More →
          </Button>
        </div>
      </div>
    </article>
  );
}
