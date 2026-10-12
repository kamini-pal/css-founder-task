import Image from 'next/image';
import FeatureCard from '@/components/ui/FeatureCard';
import { features } from '@/data/features';

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="section-label">Why Choose Us?</span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-heading leading-tight mb-4">
              Your Learning Partner<br />
              for a <span className="text-accent">Brighter Tomorrow</span>
            </h2>
            <p className="text-sm text-text-light leading-relaxed mb-8">
              We empower learners with innovative, flexible, and career-focused education. Our goal is to make quality learning accessible to everyone and help you achieve your dreams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
              ))}
            </div>
          </div>

          <div className="relative min-h-[480px] md:min-h-[540px]">
            <div className="relative w-[78%] ml-auto rounded-[1.75rem] overflow-hidden shadow-xl h-[380px] md:h-[460px]">
              <Image
                src="/image9.jpeg"
                alt="Student learning on a laptop"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>

            <div className="absolute bottom-16 left-0 w-[54%] h-[210px] md:h-[240px] rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/image2.jpeg"
                alt="Students walking on campus"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>

            <div className="absolute bottom-4 right-4 bg-primary text-white rounded-xl shadow-lg px-6 py-4 text-center z-10">
              <p className="text-3xl font-bold leading-none">26+</p>
              <p className="text-xs mt-1 leading-snug">Years of<br />Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
