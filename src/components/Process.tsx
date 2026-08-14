'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ClipboardList, MessageSquareQuote, PieChart } from 'lucide-react';
import SectionHeading from './SectionHeading';

const steps = [
  {
    badge: 'First Step',
    icon: MessageSquareQuote,
    title: 'Consultation',
    body: 'We discuss your business needs and financial goals to understand how we can help.',
  },
  {
    badge: 'Second Step',
    icon: PieChart,
    title: 'Service Process',
    body: 'We implement tailored financial solutions, ensuring accuracy and efficiency.',
  },
  {
    badge: 'Third Step',
    icon: ClipboardList,
    title: 'Delivery',
    body: 'You receive clear reports and insights. Simple, efficient, and hassle-free!',
  },
];

export default function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-surface-grey py-20 lg:py-24">
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={800}
        height={733}
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-0 hidden w-[420px] select-none opacity-15 sm:block lg:w-[560px]"
      />

      <div className="container-kj relative">
        <SectionHeading eyebrow="How it works" title="Easy Step Process" />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative border-b-[3px] border-brand bg-white pb-9 pl-8 pr-8 pt-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cardHover"
            >
              <span className="absolute right-0 top-0 bg-brand px-4 py-2 text-sm font-medium text-white">
                {step.badge}
              </span>

              <div className="flex items-center gap-3 pr-24">
                <step.icon size={28} strokeWidth={1.5} className="text-brand" aria-hidden="true" />
                <h3 className="text-2xl text-ink">{step.title}</h3>
              </div>

              <p className="mt-4 text-[15px] leading-[1.75] text-ink-muted">{step.body}</p>

              <Link
                href="/contact"
                className="mt-6 inline-flex bg-brand px-7 py-3 text-[15px] text-white transition-colors hover:bg-brand-600"
              >
                Learn More
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
