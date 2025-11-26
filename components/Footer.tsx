import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-dark-900 border-t border-gray-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AlexDev. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 text-sm font-medium text-gray-500">
           <a href="#" className="hover:text-primary transition-colors">Upwork Profile</a>
           <a href="#" className="hover:text-primary transition-colors">Freelancer Profile</a>
           <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;