import React from 'react';
import LandingSection from '@/components/sections/landing-section';
import FeatureShowcase from '@/components/sections/feature-showcase';
import CtaSection from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <div className="h-[100dvh] w-[100dvw] overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth no-scrollbar">
      
      <section className="h-[100dvh] w-full snap-start snap-always relative outline-none flex items-center justify-center">
        <LandingSection />
      </section>

      <section id="showcase-section" className="h-[100dvh] w-full snap-start snap-always relative outline-none flex items-center justify-center">
        <FeatureShowcase />
      </section>

      <section className="h-[100dvh] w-full snap-start snap-always relative outline-none flex items-center justify-center">
        <CtaSection />
      </section>
      
    </div>
  );
}
