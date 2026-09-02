import Image from 'next/image';

export default function PinkPageHero({
  title,
  intro,
  bgSrc = '/images/page-hero-about-testimonials.jpg',
}: {
  title: string;
  intro?: string;
  bgSrc?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[320px] items-center overflow-hidden lg:min-h-[400px]">
      <Image
        src={bgSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pink-900/70 via-pink-800/60 to-pink-950/75" />

      <div className="container-kj py-16 text-center text-white">
        <h1 className="text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">{title}</h1>
        {intro ? (
          <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-[1.8] text-white/90">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}
