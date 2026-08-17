import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import ChevronDivider from '@/components/ChevronDivider';
import Services from '@/components/Services';
import AreasWeCover from '@/components/AreasWeCover';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import CtaBand from '@/components/CtaBand';
import Testimonials from '@/components/Testimonials';
import MissionBanner from '@/components/MissionBanner';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ChevronDivider />
      <Services />
      <AreasWeCover />
      <WhyChooseUs />
      <Process />
      <CtaBand />
      <Testimonials />
      <MissionBanner />
      <Faq />
      <Contact />
    </>
  );
}
