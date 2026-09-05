import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { areas } from '@/data/areas';

const featured = areas.slice(0, 12);

export default function AreasWeCover() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-kj">
        <SectionHeading
          eyebrow="Areas We Cover"
          title="Accountancy and Finance Support in Glasgow and Across the UK"
        />

        <Reveal className="mx-auto mt-6 max-w-2xl text-center">
          <p className="text-[17px] leading-[1.8] text-ink-soft">
            Based in Uddingston, working with small business owners across South Lanarkshire,
            North Lanarkshire and Greater Glasgow, in person locally, and through cloud-based
            systems and video calls everywhere else.
          </p>
        </Reveal>

        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {featured.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/areas/${area.slug}`}
                className="inline-flex items-center gap-2 border border-neutral-200 bg-white px-5 py-2.5 text-[15px] font-medium text-ink transition-colors hover:border-brand hover:text-brand"
              >
                <MapPin size={15} aria-hidden="true" />
                {area.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-9 text-center">
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 font-medium text-brand hover:gap-3"
          >
            View all areas we cover
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
