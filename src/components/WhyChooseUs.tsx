'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BarChart3, FileSearch, HandshakeIcon, Play, ScrollText } from 'lucide-react';
import Reveal from './Reveal';
import VideoModal from './VideoModal';

const YOUTUBE_ID = 'S5sDl0I-U9U';

const pillars = [
  {
    icon: FileSearch,
    title: 'We Provide More Than Just Numbers – We Provide Insights',
    body: 'We don’t just prepare accounts and file paperwork. We take a deep interest in your business, working alongside you to simplify your finances, provide strategic insights, and ensure you understand your numbers. Our goal is to help you see the bigger picture so you can make informed decisions that drive profitability and growth.',
  },
  {
    icon: BarChart3,
    title: 'Educating & Empowering Business Owners',
    body: 'We don’t just manage your accounts—we make sure you understand them. We believe in empowering our clients by explaining what’s happening with their finances so they can make better business decisions with confidence.',
  },
  {
    icon: ScrollText,
    title: 'A Personalised, Hands-On Approach',
    body: 'Unlike firms that take on as many clients as possible, we focus on quality over quantity. This allows us to give each business the time and attention they deserve. We tailor our services to fit your unique needs and grow with you as your business evolves.',
  },
  {
    icon: HandshakeIcon,
    title: 'A True Finance Partner – Not Just an Accountant',
    body: 'From cash flow planning to financial forecasting, bookkeeping to boardroom strategy, we offer a full finance function, so you have the financial leadership your business needs—without the overhead of hiring in-house.',
  },
];

export default function WhyChooseUs() {
  const [videoOpen, setVideoOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="bg-surface-grey py-20 lg:py-28">
      <div className="container-kj">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">Why Choose Us</p>
            <h2 className="section-title max-w-[16ch] text-ink">
              Beyond Compliance – Real Financial Value for Your Business
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.75] text-ink-soft">
              For many small businesses, accounting is seen as nothing more than a compliance
              requirement—just ticking boxes for HMRC and Companies House. But at KJ Management
              Accounting Solutions, we believe your finances should do more than just keep you
              compliant—they should work for you, helping you make smarter decisions and grow with
              confidence.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group relative block aspect-[16/10] w-full overflow-hidden shadow-card"
              aria-label="Play the introduction video"
            >
              <Image
                src="/images/video-poster.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
              <span className="absolute left-1/2 top-1/2 inline-flex h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white/90">
                <span className="absolute inset-0 rounded-full border-[3px] border-white/60 animate-pulseRing" />
                <Play size={30} className="ml-1 fill-white text-white" aria-hidden="true" />
              </span>
            </button>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-20">
          {pillars.map((pillar, i) => (
            <motion.li
              key={pillar.title}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-5 bg-white p-8 shadow-card transition-shadow duration-300 hover:shadow-cardHover"
            >
              <pillar.icon
                size={30}
                strokeWidth={1.5}
                className="mt-1 shrink-0 text-brand"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-lg leading-snug text-ink">{pillar.title}</h3>
                <p className="mt-2.5 text-[15px] leading-[1.75] text-ink-muted">{pillar.body}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} youtubeId={YOUTUBE_ID} />
    </section>
  );
}
