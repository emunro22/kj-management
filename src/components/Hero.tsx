'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import BookCta from './BookCta';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const item = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative isolate flex min-h-[620px] items-center overflow-hidden lg:min-h-[760px]">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-kj py-24 text-center text-white"
      >
        <motion.h1
          variants={item}
          className="mx-auto max-w-[19ch] text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[4.4rem]"
        >
          Not Just Accounting
          <br />
          A Complete Finance Function for Small Business Owners
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/90"
        >
          More Than Just Numbers – Helping Small Businesses Plan, Manage &amp; Scale with
          Confidence.
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <BookCta />
        </motion.div>
      </motion.div>
    </section>
  );
}
