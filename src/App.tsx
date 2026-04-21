import React from 'react';
import LandingSection from '@/components/sections/landing-section';
import FeatureShowcase from '@/components/sections/feature-showcase';
import CtaSection from '@/components/sections/cta-section';

// Komponen Utama Aplikasi - dengan layout layar penuh interaktif
export default function App() {
  return (
    // Wadah scroll dengan snap penuh per layar (Tiap seksi mengambil pas 100vh)
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      
      {/* Halaman 1: Beranda Pembuka Baru dengan Logo di Atas */}
      <section className="h-screen w-full snap-start snap-always relative outline-none flex items-center justify-center">
        <LandingSection />
      </section>

      {/* Halaman 2: Fitur Utama (Spasial) yang sebelumnya di tengah */}
      <section className="h-screen w-full snap-start snap-always relative outline-none flex items-center justify-center">
        <FeatureShowcase />
      </section>

      {/* Halaman 3: Penutup & Call to Action (Beranda lama yang digeser ke akhir) */}
      <section className="h-screen w-full snap-start snap-always relative outline-none flex items-center justify-center">
        <CtaSection />
      </section>
      
    </div>
  );
}
