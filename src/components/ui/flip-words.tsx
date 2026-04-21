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
    <span className={cn("relative inline-block text-left perspective-1000", className)}>
      <AnimatePresence>
        <motion.span
          key={index}
          initial={{ opacity: 0, rotateX: -90, y: -20 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          exit={{ opacity: 0, rotateX: 90, y: 20 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
          style={{ transformOrigin: "center center", position: "absolute", left: 0, top: 0 }}
          className="whitespace-nowrap drop-shadow-xl"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      {/* Bingkai statis tak terlihat supaya elemen lain 100% tidak tergeser sedikitpun walau ganti kata */}
      <span className="invisible whitespace-nowrap pointer-events-none">{longestWord}</span>
    </span>
  );
};
