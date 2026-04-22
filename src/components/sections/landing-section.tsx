import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import logoGambar from '@/assets/logo.png';
import { FlipWords } from '@/components/ui/flip-words';
import { ChevronDown } from 'lucide-react';

const WORDS_ARRAY = ["Cerdas", "Sehat", "Tangguh", "Berdaya"];

export default function LandingSection() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col items-center justify-between relative overflow-hidden bg-sky-50 py-8 px-6">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-blue-200/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] bg-cyan-200/50 rounded-full blur-3xl"></div>
      </div>

      {/* Tengah: Logo dan Teks digabung agar proporsional tanpa rongga atas ekstrim */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl px-6 h-full mt-[-2rem] md:mt-[-4rem]">
        {/* Logo */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          src={logoGambar}
          alt="Logo NutriSea"
          className="w-28 sm:w-32 md:w-48 object-contain drop-shadow-2xl mb-8"
        />

        {/* Teks */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col justify-center text-center w-full"
        >
          <span className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-4 block drop-shadow-sm">
            Pangan Fungsional Gummy Fauna Laut
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-slate-800 tracking-tighter leading-[1.1] py-2">
            Wujudkan Generasi Emas <br className="hidden md:block" /> yang {' '}
            <FlipWords duration={2000} words={WORDS_ARRAY} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500" />
          </h1>

          <p className="mt-4 md:mt-6 text-[11px] sm:text-xs md:text-lg text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed px-2">
            Menggabungkan kekayaan maritim organik dan teknologi IoT, hadir sebagai solusi intervensi stunting anti-GTM yang ceria. Merupakan sinergi nyata pencapaian <span className="text-blue-600 font-bold">SDGs 2 (Zero Hunger)</span> dan <span className="text-blue-600 font-bold">SDGs 3 (Good Health)</span>.
          </p>
        </motion.div>
      </div>

      {/* Indikator Scroll Bawah - Dipaku lebih bawah, lebih kecil dan proporsional */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-30 cursor-pointer hover:opacity-100 opacity-70 transition-opacity" onClick={() => document.getElementById('showcase-section')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="text-[8px] md:text-[10px] text-blue-500 uppercase tracking-[0.25em] font-bold">SUPERFOOD & DIGITAL</span>
        <div className="w-[3px] h-6 md:h-10 bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
      </div>
    </div>
  );
}
