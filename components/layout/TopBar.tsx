import { MapPin, Mail, Phone } from 'lucide-react';

function SocialIcon({ children, href, label }: { children: React.ReactNode; href: string; label: string }) {
  return (
    <a href={href} aria-label={label} className="text-white/70 hover:text-accent transition-colors">
      {children}
    </a>
  );
}

export default function TopBar() {
  return (
    <div className="bg-navy text-white text-xs">
      <div className="section-container flex items-center justify-between py-2">
        {/* Left — Social */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-white/80 font-medium">Follow Us</span>
          <div className="flex items-center gap-2.5">
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

        {/* Right — Contact info */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#" className="hidden md:flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
            <MapPin size={13} />
            <span>2118 Milford Road, New York</span>
          </a>
          <a href="mailto:info@example.com" className="hidden sm:flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
            <Mail size={13} />
            <span>info@example.com</span>
          </a>
          <a href="tel:+15126141898" className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
            <Phone size={13} />
            <span>+1 512 614 1898</span>
          </a>
        </div>
      </div>
    </div>
  );
}
