"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 2000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words, duration]);

  // Cari kata terpanjang untuk penopang ukuran statis tak terlihat
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");

  // Grid layout untuk menumpuk elemen di tempat yang sama
  // Tambahkan padding vertikal yang besar (py-8) untuk menampung rotasi 3D agar tak kepotong
  // Tambahkan px-2 agar bayangan tak terpotong samping
  return (
    <span className="relative inline-grid grid-cols-1 grid-rows-1 text-left perspective-1000 overflow-visible px-2 py-8 -my-8 align-middle">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, rotateX: -90, y: -20 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          exit={{ opacity: 0, rotateX: 90, y: 20 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
          style={{ transformOrigin: "center center", gridArea: "1 / 1 / 2 / 2" }}
          className={cn("whitespace-nowrap drop-shadow-xl block leading-normal", className)}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      {/* Penahan lebar statis. Tidak boleh pakai className yang mengandung bg-clip-text agar ukurannya akurat */}
      <span 
        style={{ gridArea: "1 / 1 / 2 / 2" }} 
        className="invisible whitespace-nowrap pointer-events-none block leading-normal font-inherit"
      >
        {longestWord}
      </span>
    </span>
  );
};
