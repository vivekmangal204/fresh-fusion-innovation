'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Freelancer',
      text: 'Got my PAN card approved in just 2 days. The entire process was so smooth and transparent. Highly recommended!',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Priya Singh',
      role: 'Business Owner',
      text: 'Best service ever! They handled my GST filing and everything was perfect. No hidden charges, just honest service.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Amit Patel',
      role: 'Student',
      text: 'Applied for my passport using their service. Fast, reliable, and super affordable. Thanks a lot!',
      rating: 5,
      avatar: '👨‍🎓',
    },
    {
      name: 'Neha Sharma',
      role: 'Employee',
      text: 'WhatsApp integration makes everything so convenient. Just send documents and get updates in real-time.',
      rating: 5,
      avatar: '👩‍💻',
    },
    {
      name: 'Vikram Desai',
      role: 'Entrepreneur',
      text: 'Completed 3 different services at once. Their team is highly professional and always helpful.',
      rating: 5,
      avatar: '👨‍🚀',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoplay, testimonials.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoplay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoplay(false);
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-32 overflow-hidden bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg">Real reviews from satisfied customers</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${current * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex"
            >
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  className="w-full flex-shrink-0 px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="p-6 rounded-lg bg-white border border-muted hover:shadow-md transition-shadow"
                  >
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-foreground text-base leading-relaxed mb-4">
                      &quot;{testimonial.text}&quot;
                    </p>

                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{testimonial.avatar}</div>
                      <div>
                        <p className="text-foreground font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="p-2 rounded-lg bg-muted border border-muted text-foreground hover:bg-muted/80 transition-colors"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setCurrent(i);
                    setIsAutoplay(false);
                  }}
                  animate={{ 
                    width: current === i ? 24 : 8,
                    backgroundColor: current === i ? 'rgb(59, 130, 246)' : 'rgb(226, 232, 240)',
                  }}
                  className="h-2 rounded-full transition-all"
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="p-2 rounded-lg bg-muted border border-muted text-foreground hover:bg-muted/80 transition-colors"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
