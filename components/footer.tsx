'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import { BRAND } from '@/lib/branding';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Services: [
      { label: 'Government Documents', href: '#' },
      { label: 'Online Applications', href: '#' },
      { label: 'Print Services', href: '#' },
      { label: 'Digital Verification', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Disclaimer', href: '#' },
    ],
  };

  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative border-t border-muted bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 md:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-1">
              <span className="text-secondary">{BRAND.shortName}</span>{' '}
              <span className="text-accent font-semibold">{BRAND.innovationWord}</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              All online services at one place. Delivered through WhatsApp.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 transition-all"
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(links).map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-muted my-12" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} {BRAND.fullName}. All rights reserved.
          </p>

          {/* Newsletter CTA */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-muted/50 border border-muted text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2 rounded-lg bg-primary text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Mail size={16} />
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
