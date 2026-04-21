import React from 'react';
import { motion } from 'framer-motion';
import logoGambar from '@/assets/logo.png';
import { FlipWords } from '@/components/ui/flip-words';
import { ChevronDown } from 'lucide-react';

const WORDS_ARRAY = ["Cerdas", "Sehat", "Tangguh", "Berdaya"];

export default function LandingSection() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-sky-50">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-blue-200/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] bg-cyan-200/50 rounded-full blur-3xl"></div>
      </div>
      
      {/* Logo ditengah dan di atas sedikit */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50">
          <motion.img 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              src={logoGambar} 
              alt="Logo NutriSea" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-32 md:w-48 object-contain cursor-pointer drop-shadow-2xl"
          />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-center z-10 px-6 max-w-6xl w-full"
      >
        <span className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-6 block drop-shadow-sm">
            Pangan Fungsional Gummy Fauna Laut
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-800 tracking-tighter leading-[1.2] py-2">
          Wujudkan Generasi Emas <br className="hidden md:block" /> yang{' '}
          <FlipWords duration={2000} words={WORDS_ARRAY} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500" />
        </h1>
        
        <p className="mt-8 text-sm md:text-lg text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
          Menggabungkan kekayaan maritim organik dan teknologi IoT, hadir sebagai solusi intervensi stunting anti-GTM yang ceria. Merupakan sinergi nyata pencapaian <span className="text-blue-600 font-bold">SDGs 2 (Zero Hunger)</span> dan <span className="text-blue-600 font-bold">SDGs 3 (Good Health)</span>.
        </p>
      </motion.div>
      
      {/* Indikator Scroll Bawah Tanpa Animasi - Diturunkan */}
      <div 
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 cursor-pointer hover:opacity-75 transition-opacity"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
          <span className="text-[10px] md:text-xs text-blue-600 uppercase tracking-[0.2em] font-black">SCROLL KE BAWAH ⬇</span>
          <div className="w-1 h-12 md:h-14 bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
      </div>
    </div>
  );
}
