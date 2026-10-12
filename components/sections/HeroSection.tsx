import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden">
      <Image
        src="/image1.png"
        alt="Students studying together on campus"
        fill
        className="object-cover object-[center_35%]"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/70 to-navy/20" />

      <div className="relative z-10 section-container py-16 md:py-24">
        <div className="max-w-xl">
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Your Future Starts Here
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.15] mb-6">
            Learn Today
            <br />
            <span className="text-accent italic">Build a Brighter Tomorrow</span>
          </h1>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            Discover industry-focused programs, learn from expert faculty, and take the next step towards a successful future.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="secondary" size="lg" href="#courses" icon={<ArrowRight size={18} />}>
              Explore Programs
            </Button>
            <Button variant="outlineLight" size="lg" href="#" icon={<Play size={16} />}>
              Watch Video
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 sm:gap-10">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">10K+</p>
              <p className="text-xs text-white/60">Students Enrolled</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">200+</p>
              <p className="text-xs text-white/60">Expert Faculty</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">95%</p>
              <p className="text-xs text-white/60">Career Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
