'use client';

import { motion } from 'framer-motion';
import { FileText, Globe, Printer, Shield, Briefcase, MessageSquare, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: FileText, title: 'Government Documents', items: ['PAN Card', 'Aadhar', 'Passport', 'Driving License', 'Voter ID', 'Marraige Certificate'] },
    { icon: Globe, title: 'Online Applications', items: ['Visa Application', 'Scholarship Form', 'Job Applications', 'Permits'] },
    { icon: Printer, title: 'Print Services', items: ['Document Printing', 'ID Cards', 'Certificates', 'Custom Printing'] },
    { icon: Shield, title: 'Digital Verification', items: ['E-Signature', 'Document Verification', 'Authentication', 'Certification'] },
    { icon: Briefcase, title: 'Business Services', items: ['Company Registration', 'GST Filing', 'Tax Returns', 'Compliance'] },
    { icon: MessageSquare, title: 'WhatsApp Support', items: ['24/7 Assistance', 'Document Upload', 'Status Updates', 'Consultations'] },
  ];

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions delivered through WhatsApp
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="relative group p-6 rounded-lg bg-white border border-muted overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <motion.div
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <service.icon size={24} className="text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>

              {/* Service items */}
              <div className="space-y-2">
                {service.items.map((item, j) => (
                  <div key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
