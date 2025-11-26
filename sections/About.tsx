import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const skills = [
  "React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Node.js & Express", "Firebase & Supabase", "GraphQL", "Figma to Code"
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Image/Avatar Area */}
          <div className="relative">
             <div className="absolute inset-0 bg-primary/20 transform translate-x-4 translate-y-4 rounded-2xl -z-10"></div>
             <img 
               src="https://picsum.photos/600/600?grayscale" 
               alt="Professional Avatar" 
               className="rounded-2xl shadow-xl w-full object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-500"
             />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Crafting scalable frontend solutions for forward-thinking companies.
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a Senior Frontend Engineer with 6+ years of experience helping international clients in the US, UK, and Australia build high-performance web applications. My focus isn't just on writing code, but on delivering business value through clean design and intuitive user experiences.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Previously, I've worked with SaaS startups to improve their dashboard performance by 40% and have built landing pages that doubled conversion rates.
            </p>

            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Tech Stack</h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle2 size={16} className="text-primary" />
                    <span className="text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;