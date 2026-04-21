"use client";
import React, { useState, useEffect } from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

// Fungsi untuk menggabungkan sekumpulan objek parameter bebas menjadi format string URL standar.
const encodeParams = (params: Record<string, string | number | boolean>) => {
    return new URLSearchParams(params as Record<string, string>).toString();
};

type LinkPreviewProps = {
    children: React.ReactNode;
    url: string;
    className?: string;
    imageSrc?: string;
    isStatic?: boolean; // Apabila web tidak memiliki preview dari API dinamis, pasang menjadi statis.
};

// Komponen Pratinjau Tautan (Menampilkan hasil screenshot halaman web di dalam kotak ketika kursor menunjuk tautan).
export const LinkPreview = ({ children, url, className, isStatic = false, imageSrc = "" }: LinkPreviewProps) => {
    // Jika tidak statis, panggil API Microlink untuk membaca kartu dan mencetak layar (screenshot) website-nya otomatis.
    const src = isStatic ? imageSrc : `https://api.microlink.io/?${encodeParams({ url, screenshot: true, meta: false, embed: "screenshot.url", colorScheme: "dark", "viewport.isMobile": true, "viewport.deviceScaleFactor": 1, "viewport.width": 600, "viewport.height": 375 })}`;

    const [isOpen, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    
    // Konfigurasi pergeseran posisi dinamis mouse via framer-motion untuk kesan seperti mengikuti kursor.
    const x = useMotionValue(0);
    const translateX = useSpring(x, { stiffness: 100, damping: 15 });

    // Blokir perenderan kartu sementara sampai halaman web bereaksi mutlak di ranah klien (Cegah isu rehidrasi)
    useEffect(() => setIsMounted(true), []);

    // Melacak seberapa jauh pergeseran panah kursor mouse melintasi objek teks untuk mengkalkulasi titik tampil dari popup/kartunnya.
    const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const targetRect = (event.target as HTMLElement).getBoundingClientRect();
        const offsetFromCenter = ((event.clientX - targetRect.left) - targetRect.width / 2) / 2;
        x.set(offsetFromCenter);
    };

    return (
        <>
            {/* Download gambar secara sembunyi-sembunyi agar ketika kursor menyentuh, gambar tak terkesan masih memuat */}
            {isMounted && <div className="hidden"><img src={src} alt="preloader memori" /></div>}
            
            {/* Wadah Pemicu Utama Berbasis HoverCardPrimitive RadixUI */}
            <HoverCardPrimitive.Root openDelay={50} closeDelay={100} onOpenChange={setOpen}>
                <HoverCardPrimitive.Trigger asChild>
                    <a
                        onMouseMove={handleMouseMove}
                        className={cn("inline-flex items-center gap-1 font-semibold transition-colors border-b-2 pb-0.5 border-dashed border-current hover:border-solid", className)}
                        href={url} target="_blank" rel="noopener noreferrer"
                    >
                        {children}
                    </a>
                </HoverCardPrimitive.Trigger>
                
                {/* Antarmuka Visual Pratinjau / Kotak Popup */}
                <HoverCardPrimitive.Content className="z-50" side="top" align="center" sideOffset={10}>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                className="shadow-2xl rounded-xl border border-slate-200 bg-white p-1"
                                style={{ x: translateX }}
                            >
                                <img src={src} className="rounded-lg object-cover w-[200px] h-[125px]" alt="Snapshot Jendela Tautan" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </HoverCardPrimitive.Content>
            </HoverCardPrimitive.Root>
        </>
    );
};