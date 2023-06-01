import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Unfonts({
  // Google Fonts API V2
  google: {
    preconnect: false,
    display: 'swap',
    injectTo: 'head-prepend',
    families: [
      {
        name: 'Inter',
        styles: 'wght@400;500;600',
        defer: true,
      },
    ],
  },
   }),],
  resolve:{
    alias: {
      "@": path.resolve(__dirname, "./src"),
      '@styles': path.resolve(__dirname, './src/assets/styles'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@services': path.resolve(__dirname, './src/services'),
      '@store': path.resolve(__dirname, './src/store'),
    }
  }
});
