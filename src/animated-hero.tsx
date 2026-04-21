"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AnimatedHero = () => {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(() => ["cerdas", "sehat", "tangguh", "berdaya"], []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
        }, 2500);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div className="w-full py-32 flex justify-center items-center">
            <div className="container mx-auto px-6 flex flex-col items-center text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <Button variant="secondary" size="sm" className="mb-8 rounded-full gap-2 text-blue-400 bg-blue-950/50 hover:bg-blue-900/50">
                        Baca Artikel Inovasi Kami <MoveRight className="w-4 h-4" />
                    </Button>
                </motion.div>

                <h1 className="text-4xl md:text-6xl max-w-4xl font-bold tracking-tight text-white mb-6 flex flex-col items-center">
                    <span>Wujudkan Generasi Emas yang</span>
                    <span className="relative flex w-full justify-center overflow-hidden h-[1.2em] text-blue-400 mt-2">
                        &nbsp;
                        {titles.map((title, index) => (
                            <motion.span
                                key={index} className="absolute font-extrabold"
                                initial={{ opacity: 0, y: "-100%" }}
                                animate={titleNumber === index ? { y: 0, opacity: 1 } : { y: titleNumber > index ? "-150%" : "150%", opacity: 0 }}
                                transition={{ type: "spring", stiffness: 50, damping: 15 }}
                            >
                                {title}
                            </motion.span>
                        ))}
                    </span>
                </h1>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-neutral-400 max-w-3xl mb-12 leading-relaxed">
                    Nutrisea mengintegrasikan kekayaan laut dengan teknologi IoT untuk memantau gizi balita secara transparan. Dari pesisir untuk masa depan, kami memastikan setiap tumbuh kembang anak terpantau secara presisi dan objektif.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="outline" className="gap-3 rounded-full text-neutral-300">
                        <PhoneCall className="w-5 h-5" /> Hubungi Ahli Gizi
                    </Button>
                    <Button size="lg" className="gap-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                        Mulai Pantau Gizi <MoveRight className="w-5 h-5" />
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};