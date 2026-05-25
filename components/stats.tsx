'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: '10K+', label: 'Services Completed' },
    { number: '5K+', label: 'Happy Customers' },
    { number: '24/7', label: 'Customer Support' },
    { number: '99%', label: 'Satisfaction Rate' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="relative py-20 md:py-32 overflow-hidden bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="p-6 md:p-8 rounded-lg bg-white border border-muted text-center hover:shadow-md transition-shadow"
            >
              <motion.div
                animate={isVisible ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
                className="text-4xl md:text-5xl font-bold text-primary"
              >
                {stat.number}
              </motion.div>
              <p className="text-muted-foreground text-sm md:text-base mt-3 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
