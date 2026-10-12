import SectionHeading from '@/components/ui/SectionHeading';
import BlogCard from '@/components/ui/BlogCard';
import { blogs } from '@/data/blogs';

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-20 bg-white">
      <div className="section-container">
        <SectionHeading
          subtitle="Our Blog"
          title="Latest News & Insights"
          highlightedWord="Insights"
          description="Stay updated with the latest trends, tips, and insights from the world of education."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
