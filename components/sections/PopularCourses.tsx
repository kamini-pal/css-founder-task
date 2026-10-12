import SectionHeading from '@/components/ui/SectionHeading';
import CourseCard from '@/components/ui/CourseCard';
import { courses } from '@/data/courses';

export default function PopularCourses() {
  return (
    <section id="courses" className="py-16 md:py-20 bg-bg-light">
      <div className="section-container">
        <SectionHeading
          subtitle="Popular Courses"
          title="Upgrade Your Skills With Popular Courses"
          highlightedWord="Popular Courses"
          description="Explore our most in-demand programs and take the next step toward a brighter future."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
