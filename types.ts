export interface Project {
  id: number;
  title: string;
  category: 'Frontend' | 'Fullstack' | 'Mobile' | 'UI/UX';
  description: string;
  image: string;
  techStack: string[];
  demoLink: string;
  repoLink: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  country: string;
  content: string;
  avatar: string;
}

export interface NavLink {
  label: string;
  href: string;
}