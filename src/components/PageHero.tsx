import Image from 'next/image';

export default function PageHero({
  title,
  intro,
  bgSrc = '/images/hero.jpg',
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
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="container-kj py-16 text-center text-white">
        <h1 className="text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">{title}</h1>
        {intro ? (
          <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-[1.8] text-white/90">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}
