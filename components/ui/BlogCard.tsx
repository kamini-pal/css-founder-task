import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="group bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Date badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full inline-flex items-center gap-1">
            <Calendar size={12} />
            {blog.date}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="text-xs font-semibold text-primary uppercase tracking-wide">
          {blog.category}
        </span>

        {/* Title */}
        <h3 className="mt-2 text-base font-semibold text-heading leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-2 text-sm text-text-light leading-relaxed line-clamp-2">
          {blog.excerpt}
        </p>

        {/* Read More */}
        <a
          href="#"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
        >
          Read More
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </article>
  );
}
