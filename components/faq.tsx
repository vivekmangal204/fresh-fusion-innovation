'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { BRAND } from '@/lib/branding';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I get started?',
      answer: 'Simply click "Start on WhatsApp" and message us your service request. Our team will guide you through the entire process step by step.',
    },
    {
      question: 'What documents do I need?',
      answer: 'Required documents vary by service. After you share your request, we&apos;ll send you a checklist of all documents needed for your specific service.',
    },
    {
      question: 'How long does processing take?',
      answer: 'Standard processing takes 2-5 business days. For express services, we offer 24-hour processing. You&apos;ll receive updates via WhatsApp throughout.',
    },
    {
      question: 'Is my information secure?',
      answer: 'Yes! We use bank-level encryption for all documents. Your data is never shared with third parties, and we comply with all data protection laws.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods including credit cards, debit cards, UPI, net banking, and Google Pay. All transactions are 100% secure.',
    },
    {
      question: 'Can I track my application status?',
      answer: 'Absolutely! You&apos;ll receive real-time updates on WhatsApp at every step. You can also check your dashboard anytime for detailed progress.',
    },
    {
      question: 'What if I have issues after completion?',
      answer: 'We offer lifetime support for all our services. If any issue arises, reach out via WhatsApp and our team will resolve it free of charge.',
    },
    {
      question: 'Do you offer bulk services?',
      answer: 'Yes! We offer special packages for bulk orders with attractive discounts. Contact us for corporate or bulk service inquiries.',
    },
  ];

  return (
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">Find answers to common questions</p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 rounded-lg bg-white border border-muted text-left hover:shadow-sm transition-all group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={
                  openIndex === i
                    ? { opacity: 1, height: 'auto' }
                    : { opacity: 0, height: 0 }
                }
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-muted/30 border-b border-muted text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
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
            Still have questions? Contact us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
