import {
  BookOpen,
  BarChart3,
  Laptop,
  GraduationCap,
  ClipboardCheck,
  Globe,
} from 'lucide-react';
import type { Feature } from '@/types';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  BarChart3,
  Laptop,
  GraduationCap,
  ClipboardCheck,
  Globe,
};

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = iconMap[feature.icon] ?? BookOpen;

  return (
    <div className="group flex items-start gap-3 p-4 rounded-xl bg-bg-light border border-transparent hover:bg-white hover:shadow-md hover:border-primary/20 transition-all duration-300">
      <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon size={22} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-heading mb-1">{feature.title}</h3>
        <p className="text-xs text-text-light leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
}
