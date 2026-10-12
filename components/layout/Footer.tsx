import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function SocialIcon({ children, href, label }: { children: React.ReactNode; href: string; label: string }) {
  return (
    <a href={href} aria-label={label} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
      {children}
    </a>
  );
}

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Courses', href: '#courses' },
  { label: 'Our Instructors', href: '#' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQs', href: '#' },
  { label: 'Contact Us', href: '#' },
];

const courseLinks = [
  { label: 'Web Development', href: '#' },
  { label: 'Data Science', href: '#' },
  { label: 'Digital Marketing', href: '#' },
  { label: 'Business Management', href: '#' },
  { label: 'Personal Development', href: '#' },
  { label: 'View All Courses', href: '#' },
];

const supportLinks = [
  { label: 'Help Center', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Refund Policy', href: '#' },
  { label: 'Sitemap', href: '#' },
  { label: 'Careers', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy text-white overflow-hidden">
      <div className="blob-mint w-[280px] h-[280px] -top-24 -left-16 opacity-50" />
      <div className="blob-mint w-[320px] h-[320px] -bottom-28 -right-16 opacity-40" />
      <div className="relative z-10 section-container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-lg font-bold">
                <span className="text-accent">Edu</span>sity
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              At Edusity, we believe education has the power to transform lives. Our mission is to make quality learning accessible to everyone.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href="#" label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </SocialIcon>
              <SocialIcon href="#" label="Twitter">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </SocialIcon>
              <SocialIcon href="#" label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </SocialIcon>
              <SocialIcon href="#" label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-accent transition-colors">
                    &rsaquo; {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">Popular Courses</h3>
            <ul className="space-y-2.5">
              {courseLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-accent transition-colors">
                    &rsaquo; {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-accent transition-colors">
                    &rsaquo; {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-accent" />
                <span>123 Learning Street, New York, NY 10001</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <Phone size={16} className="flex-shrink-0 mt-0.5 text-accent" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <Mail size={16} className="flex-shrink-0 mt-0.5 text-accent" />
                <span>info@edusity.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <Clock size={16} className="flex-shrink-0 mt-0.5 text-accent" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM<br />(Closed on Weekends)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>&copy; 2025 Edusity. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
