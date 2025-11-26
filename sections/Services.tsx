import React from 'react';
import { motion } from 'framer-motion';
import { Code2, LayoutDashboard, Rocket, Database } from 'lucide-react';
import { SERVICES } from '../utils/data';

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 size={32} />,
  layout: <LayoutDashboard size={32} />,
  rocket: <Rocket size={32} />,
  database: <Database size={32} />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-dark-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Specialized Solutions
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Tailored development services designed to meet the high standards of the international market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-900 p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-slate-700 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                {iconMap[service.icon]}
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{service.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;