import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate EmailJS call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-dark-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Contact</h2>
              <h3 className="text-4xl font-bold text-slate-900 dark:text-white">Let's work together</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
                Have a project in mind? Looking for a long-term partner? I'm currently available for freelance projects and contract work.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Email</h4>
                  <a href="mailto:alex@example.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">alex@example.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Remote / Worldwide</p>
                  <p className="text-sm text-gray-500">Based in GMT+7, serving US/UK timezones</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-dark-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-slate-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full flex justify-center gap-2"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </Button>

              {status === 'success' && (
                <p className="text-green-600 text-center text-sm font-medium animate-pulse">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;