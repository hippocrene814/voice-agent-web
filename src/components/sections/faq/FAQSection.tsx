'use client';

import { FAQS } from "@/constants/content";
import * as React from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "var(--color-primary)" }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`transition-shadow duration-200 border border-neutral-medium bg-neutral-light rounded-2xl shadow-sm ${isOpen ? 'shadow-md' : ''}`}
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-5 font-semibold text-neutral-dark/90 focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl text-left group"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    size={28}
                    aria-hidden
                    style={{ color: "var(--color-primary)" }}
                  />
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  className={`overflow-hidden transition-all duration-300 px-6 ${isOpen ? 'max-h-40 py-3' : 'max-h-0 py-0'}`}
                  aria-hidden={!isOpen}
                >
                  <p className="text-neutral-dark/80 text-base leading-relaxed pb-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 