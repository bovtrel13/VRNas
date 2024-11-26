import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import checker from 'vite-plugin-checker';

export default defineConfig({

  plugins: [
    vue(),
    
    checker({ 
      typescript: true, // Включает проверку типов TypeScript
      vueTsc: true // Включает проверку типов для Vue SFC
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/scss/main.scss';`
      },
    },
  },
});