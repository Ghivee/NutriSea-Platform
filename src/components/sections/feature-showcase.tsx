"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Activity, Zap, ArrowUpRight, Database, LucideIcon } from "lucide-react";

type ProductId = 'left' | 'right';

interface ProductData {
    id: ProductId;
    label: string;
    title: string;
    description: string;
    image: string;
    colors: { gradient: string; glow: string; ring: string; };
    stats: { connectionStatus: string; }; 
    features: { label: string; value: number; icon: LucideIcon; }[];
    buttonText: string;
}

import produkImg from '@/assets/produk.png';
import digitalImg from '@/assets/digital.png';

const PRODUCT_DATA: Record<ProductId, ProductData> = {
    left: {
        id: 'left',
        label: 'KANDUNGAN SUPERFOOD LAUT',
        title: 'Formulasi Bio-Organik',
        description: 'Ekstrak Peptida Ikan Kembung, Rumput Laut organik, Kalsium Tiram, dan Daun Kelor. Bebas pengawet sintetis. Dipermanis alami oleh Xylitol untuk senyuman sehat tanpa karies anak.',
        image: produkImg,
        colors: { gradient: 'from-sky-300 to-blue-400', glow: 'bg-blue-400', ring: 'border-l-blue-300' },
        stats: { connectionStatus: 'SERAPAN NUTRISI MAKSIMAL' },
        features: [{ label: 'Kepadatan Tulang', value: 88, icon: Database }, { label: 'Percepatan Kognitif', value: 94, icon: ArrowUpRight }],
        buttonText: 'FAKTA KLINIS >'
    },
    right: {
        id: 'right',
        label: 'INTEGRASI DIGITAL IoT',
        title: 'Pelacakan Presisi',
        description: 'Sistem scan QR ceria memantau rutinitas gizi anak. Gummy lucu dan dashboard ramah ibu menjadi inovasi anti-GTM. Hasil scan mencegah catatan KIA Posyandu tercecer.',
        image: digitalImg,
        colors: { gradient: 'from-blue-400 to-cyan-300', glow: 'bg-cyan-400', ring: 'border-r-cyan-300' },
        stats: { connectionStatus: 'TERHUBUNG KE POSYANDU' },
        features: [{ label: 'Tingkat Kepatuhan (Anti-GTM)', value: 98, icon: Activity }, { label: 'Akurasi Rekam Medis', value: 100, icon: Zap }],
        buttonText: 'LIHAT DASHBOARD >'
    },
};

export default function FeatureShowcase() {
    const [activeSide, setActiveSide] = useState<ProductId>('left');
    const currentData = PRODUCT_DATA[activeSide];
    const isLeft = activeSide === 'left';

    const animations = {
        container: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } }, exit: { opacity: 0 } },
        item: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 } },
        image: (isLeftAnim: boolean): Variants => ({
            initial: { opacity: 0, scale: 0.8, x: isLeftAnim ? -50 : 50 },
            animate: { opacity: 1, scale: 1, x: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
            exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
        }),
    };

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-white">
            
            {/* Latar Belakang Ramah Anak (Cerah) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <motion.div
                    animate={{ background: isLeft ? 'radial-gradient(circle at 20% 50%, rgba(186, 230, 253, 0.4), transparent 50%)' : 'radial-gradient(circle at 80% 50%, rgba(191, 219, 254, 0.4), transparent 50%)' }}
                    transition={{ duration: 1 }} className="absolute inset-0"
                />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 20 }}
                className="relative z-10 w-full px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 lg:gap-32 max-w-6xl mx-auto"
            >
                {/* Node Gambar Lingkaran */}
                <div className={`relative order-1 transition-all duration-700 ease-in-out ${isLeft ? 'md:order-1' : 'md:order-2'}`}>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className={`absolute inset-[-10%] rounded-full border-2 border-dashed ${currentData.colors.ring}`} />
                    <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }} className={`absolute inset-0 rounded-full bg-gradient-to-br ${currentData.colors.gradient} blur-2xl opacity-60`} />
                    
                    <div className="relative h-56 w-56 md:h-[400px] md:w-[400px] rounded-full border-4 border-white bg-white/50 backdrop-blur-xl flex items-center justify-center overflow-hidden shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.img key={currentData.id} src={currentData.image} variants={animations.image(isLeft)} initial="initial" animate="animate" exit="exit" className="w-[85%] h-[85%] object-contain drop-shadow-xl transition-all duration-500 hover:scale-105" />
                        </AnimatePresence>
                    </div>
                    
                    {/* Badge Status Ramah Anak */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
                        <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-lg">
                            <span className={`h-2 w-2 rounded-full ${currentData.colors.glow} animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.8)]`} />
                            {currentData.stats.connectionStatus}
                        </div>
                    </div>
                </div>

                {/* Teks Penjelasan Ramah */}
                <div className={`w-full max-w-md order-2 transition-all duration-700 ease-in-out ${isLeft ? 'md:order-2' : 'md:order-1'}`}>
                    <AnimatePresence mode="wait">
                        <motion.div key={activeSide} variants={animations.container} initial="hidden" whileInView="visible" viewport={{ once: false }} exit="exit" className={`flex flex-col ${isLeft ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} items-center text-center mt-10 md:mt-0`}>
                            <motion.h2 variants={animations.item} className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-2">{currentData.label}</motion.h2>
                            <motion.h1 variants={animations.item} className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-800">{currentData.title}</motion.h1>
                            <motion.p variants={animations.item} className="text-slate-600 mb-4 md:mb-5 leading-relaxed max-md:text-sm font-medium">{currentData.description}</motion.p>

                            <motion.div variants={animations.item} className="w-full space-y-5 bg-white p-6 rounded-3xl border border-slate-100 shadow-xl">
                                {currentData.features.map((feature, idx) => (
                                    <div key={feature.label}>
                                        <div className={`flex items-center justify-between mb-2 text-sm font-bold ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                                            <div className="flex items-center gap-2 text-slate-700"><feature.icon size={16} className="text-blue-500"/> <span>{feature.label}</span></div>
                                            <span className="font-mono text-blue-600">{feature.value}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <motion.div initial={{ width: 0 }} whileInView={{ width: `${feature.value}%` }} viewport={{ once: false }} transition={{ duration: 1, delay: 0.2 + idx * 0.1 }} className={`h-full ${isLeft ? 'bg-blue-500 float-left' : 'bg-cyan-500 float-right'}`} />
                                        </div>
                                    </div>
                                ))}
                                <div className={`pt-4 flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                                    <button className="text-xs font-bold text-blue-500 hover:text-blue-700 uppercase tracking-widest flex items-center gap-1 transition-colors">
                                        {currentData.buttonText}
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Menu Tombol Bawah Terang */}
            <div className="absolute bottom-6 inset-x-0 flex justify-center z-50">
                <div className="flex items-center gap-2 p-1.5 rounded-full bg-white border border-slate-200 shadow-xl">
                    {(['left', 'right'] as ProductId[]).map((id) => (
                        <button key={id} onClick={() => setActiveSide(id)} className={`relative px-6 py-2 rounded-full text-xs font-bold transition-colors ${activeSide === id ? 'text-white' : 'text-slate-500 hover:text-blue-500'}`}>
                            {activeSide === id && <motion.div layoutId="pill" className="absolute inset-0 bg-blue-500 rounded-full shadow-[0_4px_10px_rgba(59,130,246,0.5)]" />}
                            <span className="relative z-10">{PRODUCT_DATA[id].label.split(' ')[1] || 'Menu'}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}