import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Konfigurasi Vite
export default defineConfig({
  base: '/NutriSea-Platform/', // <-- BARIS PENYELAMAT GITHUB PAGES
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
