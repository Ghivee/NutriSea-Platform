import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LinkPreview } from '@/components/ui/link-preview';

export default function CtaSection() {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-sky-50 px-4 overflow-hidden">
            
            <div className="absolute inset-0 pointer-events-none flex justify-center items-center z-0">
                 <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute w-[80vh] h-[80vh] bg-blue-200/50 rounded-full blur-[120px]"
                 />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 100, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-[-40px]"
            >
                {/* Logo Nutrisea bulat dibuang sesuai pesanan */}

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-800 drop-shadow-sm leading-tight mb-8">
                    Mari Berinovasi,<br/>Tinggalkan{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                        Suplemen Lama.
                    </span>
                </h1>

                <p className="text-sm md:text-lg lg:text-xl text-slate-600 max-w-3xl font-medium leading-relaxed mb-8">
                    Lebih dari sekadar obat anak berbau amis dan mengerutkan dahi. Di bawah kolaborasi <span className="text-blue-600 font-bold">Pentahelix</span> yang memadukan pemerintah sampai masyarakat, NutriSea kini hadir memberikan perlindungan asupan gizi lezat & mendisiplinkan!
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="rounded-full font-bold shadow-lg shadow-blue-500/30 bg-blue-600 hover:bg-blue-500 text-white border-none px-8">
                        Mulai Transformasi →
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full border-blue-300 text-blue-600 hover:bg-blue-100 font-bold px-8 bg-transparent">
                        Baca Publikasi Kelautan
                    </Button>
                </div>

                <div className="mt-16 text-xs md:text-sm text-slate-500 font-medium">
                    Sistem Pemantauan Awal Stunting berlandaskan pendataan dari sistem{' '}
                    <LinkPreview url="https://kemkes.go.id" className="text-blue-500 font-bold">
                        Kementerian Kesehatan RI
                    </LinkPreview>.
                </div>
            </motion.div>
        </div>
    );
}
