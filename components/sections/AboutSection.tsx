import Image from 'next/image';
import { ArrowRight, Users, BookOpen, Briefcase, Phone } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative max-w-lg mx-auto lg:mx-0">
            <div className="relative rounded-[1.5rem] overflow-hidden shadow-lg">
              <Image
                src="/image11.png"
                alt="Students studying together on campus steps"
                width={600}
                height={500}
                className="w-full h-[420px] md:h-[480px] object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 left-4 sm:bottom-8 sm:left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary">
                <Users size={22} />
              </div>
              <div>
                <p className="text-xl font-bold text-heading">25+</p>
                <p className="text-xs text-text-light">Years of Academic<br />Excellence</p>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              subtitle="About Us"
              title="Empowering Learners for a Brighter Tomorrow"
              highlightedWord="Brighter Tomorrow"
              align="left"
            />

            <p className="text-sm text-text-light leading-relaxed mb-6 -mt-4">
              We are committed to providing high-quality education, industry-relevant programs, and a supportive learning environment that helps students grow, gain confidence, and achieve their goals.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center text-primary flex-shrink-0">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-heading">Student-Centric Approach</h4>
                  <p className="text-xs text-text-light">We focus on every student&apos;s future.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center text-primary flex-shrink-0">
                  <Users size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-heading">Expert Guidance</h4>
                  <p className="text-xs text-text-light">Learn from experienced faculty.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center text-primary flex-shrink-0">
                  <Briefcase size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-heading">Real Opportunities</h4>
                  <p className="text-xs text-text-light">Gain skills for a successful career.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="md" href="/about" icon={<ArrowRight size={16} />}>
                Learn More
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center text-primary">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs text-text-light">Have Questions?</p>
                  <p className="font-semibold text-heading text-sm">+1(406) 555-0120</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
