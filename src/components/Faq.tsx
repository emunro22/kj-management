'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Minus, Plus } from 'lucide-react';
import { faqs } from '@/data/faqs';
import Reveal from './Reveal';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface-grey py-20 lg:py-24">
      <div className="container-kj grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow mb-4 text-base">FAQ</p>
          <h2 className="max-w-[8ch] text-4xl leading-[1.1] text-ink sm:text-5xl">
            Frequently Ask Questions.
          </h2>
          <span aria-hidden="true" className="mt-7 block h-1 w-14 bg-brand" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-white p-6 shadow-card sm:p-8">
            <ul className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                const panelId = `faq-panel-${i}`;
                const buttonId = `faq-button-${i}`;

                return (
                  <li key={faq.question}>
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-[18px] font-bold transition-colors duration-300 ${
                          isOpen ? 'bg-brand text-white' : 'bg-neutral-50 text-ink hover:bg-neutral-100'
                        }`}
                      >
                        {faq.question}
                        <span
                          className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                            isOpen ? 'bg-white text-brand' : 'bg-brand text-white'
                          }`}
                        >
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-6">
                            {faq.answer.map((paragraph) => (
                              <p
                                key={paragraph}
                                className="text-[15px] leading-[1.8] text-ink-soft"
                              >
                                {paragraph}
                              </p>
                            ))}

                            {faq.list ? (
                              <ul className="mt-4 space-y-2">
                                {faq.list.map((entry) => (
                                  <li key={entry} className="flex items-center gap-2.5">
                                    <Check
                                      size={17}
                                      strokeWidth={3}
                                      className="shrink-0 text-ink"
                                      aria-hidden="true"
                                    />
                                    <span className="text-[15px] text-ink-soft">{entry}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
