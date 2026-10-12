import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white">
      <div className="blob-mint w-[520px] h-[520px] -top-40 -left-40" />
      <div className="blob-mint w-[420px] h-[420px] -bottom-36 -right-24" />
      <div className="blob-mint w-[180px] h-[180px] top-10 right-1/3" />

      <div className="relative z-10 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
              Start Your Journey Today
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading leading-tight mb-4">
              Build New Skills<br />
              For a <span className="text-accent italic">Brighter Tomorrow</span>
            </h2>
            <p className="text-text-light text-sm leading-relaxed mb-8 max-w-md">
              Join thousands of learners who are gaining in-demand skills, learning from expert educators, and achieving their career goals with our flexible and affordable courses.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" href="#" icon={<ArrowRight size={18} />}>
                Get Started Now
              </Button>
              <button
                type="button"
                className="flex items-center gap-2 text-heading text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                  <Play size={16} className="text-primary ml-0.5" />
                </div>
                Watch Our Video
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[1.75rem] overflow-hidden shadow-xl h-[300px] md:h-[380px]">
              <Image
                src="/images3.jpeg"
                alt="Student learning outdoors with a laptop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
