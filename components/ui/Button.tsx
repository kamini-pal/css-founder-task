import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineLight' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

const variantStyles: Record<string, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md',
  secondary:
    'bg-accent text-white hover:bg-primary shadow-sm hover:shadow-md',
  outline:
    'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  outlineLight:
    'border-2 border-white text-white hover:bg-white hover:text-navy',
  white:
    'bg-white text-primary hover:bg-bg-light shadow-sm',
};

const sizeStyles: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm font-medium',
  lg: 'px-8 py-3 text-base font-semibold',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  icon,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40';

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type="button" className={combinedStyles}>
      {children}
      {icon}
    </button>
  );
}
