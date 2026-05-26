'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { BRAND } from '@/lib/branding';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const response = await fetch("https://formspree.io/f/xzdwaodo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  }
};

  const contactInfo = [
    {
      icon: Phone,
      label: 'WhatsApp',
      value: BRAND.contact.whatsapp,
      href: BRAND.whatsappUrl,
    },
    {
      icon: Mail,
      label: 'Email',
      value: BRAND.contact.email,
      href: `mailto:${BRAND.contact.email}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: BRAND.contact.location,
      href: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">We&apos;re here to help. Reach out anytime!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-lg bg-white border border-muted"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-muted text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-muted text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-muted text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your service needs..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-muted text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow"
              >
                {submitted ? '✓ Message Sent!' : <>Send Message <Send size={18} /></>}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  whileHover={{ x: 5 }}
                  className="p-6 rounded-lg bg-white border border-muted hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                    >
                      <info.icon size={20} className="text-primary" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Main CTA */}
            <motion.a
              href="https://wa.me/919660134134"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full p-6 rounded-lg bg-primary text-white text-center font-semibold text-lg mt-8 shadow-md hover:shadow-lg transition-shadow"
            >
              Start on WhatsApp Now
            </motion.a>

            {/* Additional Info */}
            <div className="p-6 rounded-lg bg-muted/30 border border-muted">
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="font-semibold">Available 24/7:</span> Our WhatsApp support team is always ready to help. Send us a message anytime and we&apos;ll respond within minutes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
