import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Konfigurasi Vite
export default defineConfig({
  // Pakai root '/' jika di Vercel, pakai '/NutriSea-Platform/' jika di GitHub Pages
  base: process.env.VERCEL ? '/' : '/NutriSea-Platform/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  }
});
