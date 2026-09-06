'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { services } from '@/data/services';
import SectionHeading from './SectionHeading';

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-surface-grey pb-24 pt-6 sm:pt-10">
      <div className="container-kj">
        <SectionHeading eyebrow="Our Services" title="Smart, Scalable Financial Solutions" />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const isLastOdd = i === services.length - 1 && services.length % 3 === 1;

            return (
              <motion.li
                key={service.slug}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={isLastOdd ? 'lg:col-start-2' : undefined}
              >
                <a
                  href={`/services#${service.slug}`}
                  className="group flex h-full flex-col items-center border-b-[3px] border-brand bg-white px-7 pb-9 pt-10 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cardHover"
                >
                  <Image
                    src={service.iconSrc}
                    alt={`${service.title} icon`}
                    width={48}
                    height={48}
                    className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="mt-5 text-xl leading-snug text-ink">{service.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{service.blurb}</p>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
