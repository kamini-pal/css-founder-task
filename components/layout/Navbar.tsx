'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import type { NavLink } from '@/types';
import Button from '@/components/ui/Button';

const navLinks: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '#courses' },
  { label: 'Courses', href: '#courses' },
  { label: 'Faculty', href: '#testimonials' },
  { label: 'Admission Process', href: '#' },
  { label: 'Gallery', href: '#blog' },
  { label: 'Blog', href: '#blog' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
      <div className="section-container flex items-center justify-between py-2.5 gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                fill="white"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-heading">
            <span className="text-primary">Edu</span>sity
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-4 flex-1 justify-center" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[13px] xl:text-sm font-medium whitespace-nowrap transition-colors ${
                link.label === 'Home' ? 'text-primary' : 'text-text hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center gap-2 shrink-0">
          <Button variant="outline" size="sm" href="#" className="whitespace-nowrap px-3 py-1.5">
            Contact Us
          </Button>
          <Button variant="primary" size="sm" href="#" className="whitespace-nowrap px-3 py-1.5">
            Apply Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="xl:hidden p-2 text-heading hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav
          className="xl:hidden bg-white border-t border-border"
          aria-label="Mobile navigation"
        >
          <div className="section-container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text hover:text-primary py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-border">
              <Button variant="outline" size="sm" href="#">
                Contact Us
              </Button>
              <Button variant="primary" size="sm" href="#">
                Apply Now
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
