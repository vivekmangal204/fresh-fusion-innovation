'use client';

import { motion } from 'framer-motion';
import { Send, CheckCircle, CreditCard, Zap, Download } from 'lucide-react';
import { BRAND } from '@/lib/branding';

export default function Process() {
  const steps = [
    {
      icon: Send,
      title: 'Send Documents',
      description: 'Share your documents directly on WhatsApp',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: CheckCircle,
      title: 'Verification',
      description: 'Our experts verify your documents',
      color: 'from-cyan-500 to-green-500',
    },
    {
      icon: CreditCard,
      title: 'Secure Payment',
      description: 'Complete payment securely online',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Processing',
      description: 'Fast processing of your request',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Download,
      title: 'Receive Documents',
      description: 'Get your final documents via WhatsApp',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="process" className="relative py-20 md:py-32 overflow-hidden bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple 5-step process to get your services completed
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="text-center flex flex-col items-center">
                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 relative z-10 border border-primary/20"
                  >
                    <step.icon size={32} className="text-primary" />
                  </motion.div>

                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">
                    {i + 1}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-white font-semibold shadow-md hover:shadow-lg transition-shadow"
          >
            Start Your Process Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
