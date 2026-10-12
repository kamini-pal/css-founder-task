import Image from 'next/image';
import type { Stat } from '@/types';

const stats: Stat[] = [
  { id: 'students', value: '10K+', label: 'Students Enrolled', icon: 'Users' },
  { id: 'faculty', value: '200+', label: 'Expert Faculty', icon: 'BookOpen' },
  { id: 'programs', value: '50+', label: 'Programs Offered', icon: 'Award' },
  { id: 'satisfaction', value: '95%', label: 'Student Satisfaction', icon: 'TrendingUp' },
];

export default function ImpactSection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-navy">
      <div className="blob-mint w-[420px] h-[420px] -top-32 -left-24 opacity-40" />
      <div className="blob-mint w-[360px] h-[360px] -bottom-28 right-1/3 opacity-30" />

      <div className="relative z-10 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <span className="section-label !text-accent before:!bg-accent after:!bg-accent">
              Our Impact In Numbers
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Creating <span className="text-accent italic">Brighter Futures</span>
            </h2>
            <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-md">
              Our numbers reflect the trust of students, the dedication of our faculty, and the success we build together.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.id}>
                  <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[280px] md:h-[340px]">
              <Image
                src="/image2.jpeg"
                alt="Students walking together on campus"
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
