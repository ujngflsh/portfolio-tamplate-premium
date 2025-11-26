import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../utils/data';

// Swiper styles are loaded via CDN in index.html, so we don't import css files here
// to adhere to the rule "DO NOT use separate CSS files"

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-dark-800 transition-colors relative overflow-hidden">
      {/* Decorative BG elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Trusted by Clients Worldwide
          </h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="pb-12"
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white dark:bg-dark-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-slate-700 text-center mx-4 my-4">
                  <div className="inline-flex justify-center mb-6 text-primary opacity-30">
                    <Quote size={48} />
                  </div>
                  
                  <p className="text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200 mb-8 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex flex-col items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-primary/20"
                    />
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <div className="text-xs text-primary font-bold uppercase tracking-wider mt-1">
                      {testimonial.country}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;