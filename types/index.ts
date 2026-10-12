export interface Course {
  id: string;
  title: string;
  category: string;
  categoryColor: 'green' | 'blue' | 'purple' | 'teal';
  image: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  instructor: string;
  description: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}
