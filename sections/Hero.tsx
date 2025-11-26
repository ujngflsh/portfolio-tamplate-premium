import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Terminal, Cpu } from 'lucide-react';
import Button from '../components/ui/Button';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = (e: React.MouseEvent) => {
      e.preventDefault();
      const element = document.getElementById('portfolio');
      if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-400/30 dark:bg-purple-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-200/30 dark:bg-yellow-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-pink-300/30 dark:bg-pink-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-white/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Building <br />
            <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            I help US & UK startups build high-converting landing pages and scalable SaaS dashboards using React, Next.js, and modern UI libraries.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={scrollToContact}>
              Hire Me on Upwork
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" onClick={scrollToPortfolio}>
              View Projects
            </Button>
          </div>

          <div className="pt-8 flex items-center gap-8 text-gray-500 dark:text-gray-500">
             <div className="flex items-center gap-2">
                <Code size={18} />
                <span className="text-sm font-medium">Clean Code</span>
             </div>
             <div className="flex items-center gap-2">
                <Terminal size={18} />
                <span className="text-sm font-medium">Fast Delivery</span>
             </div>
             <div className="flex items-center gap-2">
                <Cpu size={18} />
                <span className="text-sm font-medium">Modern Tech</span>
             </div>
          </div>
        </motion.div>

        {/* Visual Content - Floating Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[600px]"
        >
           {/* Abstract Phone/Screen Representation */}
           <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/50 overflow-hidden transform rotate-[-6deg] hover:rotate-0 transition-transform duration-700 ease-out group">
              <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
              <img 
                src="https://picsum.photos/800/1000?random=50" 
                alt="App UI Interface" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              
              {/* Floating Badge 1 */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 right-10 p-4 glass-panel rounded-xl shadow-lg border border-white/30 max-w-[200px]"
              >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">98</div>
                    <span className="font-bold text-sm">Performance Score</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[98%]"></div>
                  </div>
              </motion.div>

               {/* Floating Badge 2 */}
               <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-10 p-4 glass-panel rounded-xl shadow-lg border border-white/30 flex items-center gap-4"
              >
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <Code size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">React 19 Ready</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Latest Standards</div>
                  </div>
              </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;