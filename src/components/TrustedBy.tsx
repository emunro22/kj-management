import Image from 'next/image';
import Reveal from './Reveal';

const badges = [
  {
    src: '/images/badge-acca.jpg',
    alt: 'ACCA',
    w: 130,
    h: 130,
  },
  {
    src: '/images/badge-upwork.jpg',
    alt: 'Upwork Top Rated Plus — 100% job success',
    w: 150,
    h: 150,
  },
  {
    src: '/images/badge-xero-silver.png',
    alt: 'Xero Silver Partner',
    w: 240,
    h: 117,
  },
];

export default function TrustedBy() {
  return (
    <section aria-label="Accreditations" className="bg-white py-14">
      <div className="container-kj">
        <Reveal className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-14">
          <p className="font-display text-2xl font-bold text-brand">Trusted By</p>
          <ul className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {badges.map((badge) => (
              <li key={badge.src} className="flex flex-col items-center gap-2">
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={badge.w}
                  height={badge.h}
                  className="h-auto w-[110px] object-contain sm:w-[130px]"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
