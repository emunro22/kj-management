import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import { site } from '@/data/site';

export default function MissionBanner() {
  return (
    <section className="relative isolate overflow-hidden py-24 lg:py-32">
      <Image
        src="/images/mission.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="container-kj text-center text-white">
        <Reveal>
          <h2 className="mx-auto max-w-[20ch] text-4xl leading-[1.15] sm:text-5xl">
            Whether you&rsquo;re a start-up looking for..
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-[1.8] text-white/90">
            guidance from the beginning or an established small business seeking to optimise your
            financial operations, {site.name} is here to support you every step of the way.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.8] text-white/90">
            Our mission is to empower small businesses with the financial tools and insights they
            need to thrive and prosper in a dynamic marketplace.
          </p>

          <Link href="/contact" className="btn-brand mt-9">
            Get Started
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
