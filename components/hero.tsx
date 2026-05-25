'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, CheckCircle, Award } from 'lucide-react';
import { BRAND } from '@/lib/branding';

export default function Hero() {
  const trustBadges = [
    { icon: Shield, label: '100% Secure' },
    { icon: Zap, label: 'Fast Service' },
    { icon: CheckCircle, label: 'Verified' },
    { icon: Award, label: 'Trusted' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Trust Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
            >
              ✓ Trusted Digital Assistance Platform
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground"
            >
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                All Online
              </span>
              <br />
              Services At One Place
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              Get government documents, digital services, and online applications delivered directly via WhatsApp. Fast, secure, and hassle-free.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 rounded-lg bg-primary text-white font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow"
              >
                Start on WhatsApp <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 rounded-lg border border-muted bg-white text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4"
            >
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-lg bg-muted/50 border border-muted flex flex-col items-center justify-center gap-2 text-center hover:shadow-sm transition-shadow"
                >
                  <badge.icon size={20} className="text-primary" />
                  <span className="text-xs font-medium text-foreground">{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full h-96 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-muted flex items-center justify-center overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative text-center">
                <div className="text-7xl mb-4">📱</div>
                <p className="text-muted-foreground font-medium">WhatsApp Integration Ready</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
