import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Unfonts({
    // Google Fonts API V2
  google: {
    /**
     * enable preconnect link injection
     *   <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
     * default: true
     */
    preconnect: false,

    /**
     * values: auto, block, swap(default), fallback, optional
     * default: 'swap'
     */
    display: 'swap',

    /**
     * define which characters to load
     * default: undefined (load all characters)
     */
    //text: 'ViteAwsom',

    /**
     * define where the font load tags should be inserted
     * default: 'head-prepend'
     *   values: 'head' | 'body' | 'head-prepend' | 'body-prepend'
     */
    injectTo: 'head-prepend',

    /**
     * Fonts families lists
     */
    families: [
      {
        /**
         * Family name (required)
         */
        name: 'Inter',

        /**
         * Family styles
         */
        styles: 'wght@400;500;600',

        /**
         * enable non-blocking renderer
         *   <link rel="preload" href="xxx" as="style" onload="this.rel='stylesheet'">
         * default: true
         */
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
