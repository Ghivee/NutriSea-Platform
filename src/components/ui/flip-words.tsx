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

  return (
    <span className="relative inline-grid grid-cols-1 grid-rows-1 text-left perspective-1000 overflow-visible px-4 py-2">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, rotateX: -90, y: -20 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          exit={{ opacity: 0, rotateX: 90, y: 20 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
          style={{ transformOrigin: "center center", gridArea: "1 / 1 / 2 / 2" }}
          className={cn("whitespace-nowrap drop-shadow-xl block", className)}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      {/* Bingkai statis tak terlihat supaya elemen lain 100% tidak tergeser sedikitpun walau ganti kata */}
      <span style={{ gridArea: "1 / 1 / 2 / 2" }} className={cn("invisible whitespace-nowrap pointer-events-none block", className)}>
        {longestWord}
      </span>
    </span>
  );
};
