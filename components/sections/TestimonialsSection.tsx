import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from '@/components/ui/TestimonialCard';
import Button from '@/components/ui/Button';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-bg-light">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Heading Area */}
          <div className="lg:col-span-1">
            <span className="section-label">Testimonials</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-heading leading-tight mb-4">
              What Our Students<br />
              <span className="text-accent">Have To Say</span>
            </h2>
            <p className="text-sm text-text-light leading-relaxed mb-6">
              Real stories from learners who have gained new skills, advanced their careers, and achieved their goals with us.
            </p>
            <Button variant="outline" size="md" href="#">
              View All Testimonials →
            </Button>

            {/* Navigation arrows */}
            <div className="flex items-center gap-3 mt-6">
              <button
                type="button"
                className="w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Right — Testimonial Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
