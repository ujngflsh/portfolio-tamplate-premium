import { Project, Service, Testimonial } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "FinTrack - SaaS Dashboard",
    category: "Frontend",
    description: "A high-performance financial analytics dashboard handling real-time data visualization using Recharts and D3. Optimized for speed and accessibility.",
    image: "https://picsum.photos/800/600?random=1",
    techStack: ["React 19", "TypeScript", "Tailwind", "D3.js"],
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 2,
    title: "Nebula - Landing Page Kit",
    category: "UI/UX",
    description: "A premium, dark-themed landing page template designed for AI startups. Features complex glassmorphism effects and scroll-triggered animations.",
    image: "https://picsum.photos/800/600?random=2",
    techStack: ["Framer Motion", "React", "Vite"],
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 3,
    title: "E-Commerce Headless Store",
    category: "Fullstack",
    description: "A scalable headless commerce solution connecting to Shopify API. Features ISR and optimized image loading.",
    image: "https://picsum.photos/800/600?random=3",
    techStack: ["Next.js", "GraphQL", "Stripe API"],
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 4,
    title: "TaskFlow App",
    category: "Frontend",
    description: "Drag-and-drop project management tool similar to Linear/Trello. Implemented with strict type safety and optimistic UI updates.",
    image: "https://picsum.photos/800/600?random=4",
    techStack: ["React", "Redux Toolkit", "DnD Kit"],
    demoLink: "#",
    repoLink: "#"
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building pixel-perfect, responsive, and accessible web applications using modern React ecosystems.",
    icon: "code"
  },
  {
    id: 2,
    title: "SaaS Dashboard UI",
    description: "Complex data-heavy interfaces designed for clarity, performance, and user retention.",
    icon: "layout"
  },
  {
    id: 3,
    title: "Landing Page Builder",
    description: "High-conversion marketing pages with premium animations that tell your brand's story.",
    icon: "rocket"
  },
  {
    id: 4,
    title: "API Integration",
    description: "Seamlessly connecting frontends with headless CMS, payment gateways, and backend services.",
    icon: "database"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Product Manager",
    company: "TechFlow USA",
    country: "USA",
    content: "Alex delivered the project 2 weeks ahead of schedule. The code quality is exceptional, and the animations gave our product that premium feel we needed.",
    avatar: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Michael O'Connor",
    role: "Founder",
    company: "StartScale",
    country: "UK",
    content: "I've worked with many developers on Upwork, but Alex stands out. Communication was clear, and he understood the business goals behind the design.",
    avatar: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Liam Davis",
    role: "CTO",
    company: "AusTech Solutions",
    country: "Australia",
    content: "Incredible attention to detail. The dashboard implementation was pixel-perfect and highly performant even with large datasets.",
    avatar: "https://picsum.photos/100/100?random=12"
  }
];