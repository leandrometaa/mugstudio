import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/mugstudio/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    chunkSizeWarningLimit: 6000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'babylon-vendor': ['@babylonjs/core', '@babylonjs/loaders', 'babylonjs'],
          'ui-components': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slot'
          ],
          'ui-utils': [
            'class-variance-authority',
            'clsx',
            'tailwind-merge'
          ],
          'icons': [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/free-regular-svg-icons',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/react-fontawesome'
          ]
        }
      }
    }
  }
});
