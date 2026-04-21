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

  // Strategi Anti-Goyang (Zero-Shift): 
  // Kita taruh semua kata sebagai 'invisible' di grid yang sama.
  // Browser akan melebarkan container sesuai kata yang paling LEBAR (bukan paling panjang stringnya).
  // Karena semua kata ada disitu terus (secara invisible), lebar container tidak akan pernah berubah 0.0001px pun.
  return (
    <span className="relative inline-grid grid-cols-1 grid-rows-1 text-left perspective-1000 overflow-visible px-2 py-8 -my-8 align-middle">
      {/* Semua kata dirender invisible untuk mengunci lebar container secara absolut */}
      {words.map((word, i) => (
        <span 
          key={`anchor-${i}`}
          style={{ gridArea: "1 / 1 / 2 / 2" }} 
          className="invisible whitespace-nowrap pointer-events-none block leading-normal pt-1 font-inherit"
        >
          {word}
        </span>
      ))}

      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, rotateX: -90, y: -20 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          exit={{ opacity: 0, rotateX: 90, y: 20 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
          style={{ transformOrigin: "center center", gridArea: "1 / 1 / 2 / 2" }}
          className={cn("whitespace-nowrap drop-shadow-xl block leading-normal pt-1", className)}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
