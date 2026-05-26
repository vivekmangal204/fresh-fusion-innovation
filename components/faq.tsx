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
      answer:
        'Getting started is simple. Just click on "Start on WhatsApp" and send us your requirement. Our team will personally guide you through every step, from document collection to final approval.',
    },
    {
      question: 'What documents do I need?',
      answer:
        'The required documents depend on the service you choose. Once you share your request, our team will instantly provide you with a customized checklist and help you avoid missing any important documents.',
    },
    {
      question: 'How long does processing take?',
      answer:
        'Processing time varies by service type. Most standard services are completed within 2–5 business days, while urgent requests can often be processed within 24 hours. You’ll receive regular progress updates on WhatsApp.',
    },
    {
      question: 'Is my information secure?',
      answer:
        'Absolutely. Your personal information and documents are protected with secure handling practices and strict privacy measures. We never share your data with third parties without your consent.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We support multiple payment options including UPI, debit cards, credit cards, net banking, and digital wallets. All transactions are processed securely for a safe and hassle-free experience.',
    },
    {
      question: 'Can I track my application status?',
      answer:
        'Yes. You’ll receive real-time updates throughout the process on WhatsApp, so you always know the current status of your application without needing to follow up repeatedly.',
    },
    {
      question: 'What if I face issues after completion?',
      answer:
        'Our support doesn’t end after the service is completed. If you face any issue or need assistance later, our team will be available to help you quickly and efficiently.',
    },
    {
      question: 'Do you offer bulk services?',
      answer:
        'Yes, we provide bulk and corporate service solutions with dedicated support and special pricing. Contact us directly to discuss your requirements and get a customized offer.',
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
