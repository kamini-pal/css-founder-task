import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PopularCourses from "@/components/sections/PopularCourses";
import ImpactSection from "@/components/sections/ImpactSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import BlogSection from "@/components/sections/BlogSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PopularCourses />
      <ImpactSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
      <BlogSection />
    </>
  );
}
