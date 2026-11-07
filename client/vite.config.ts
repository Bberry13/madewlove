import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'MadewLove — Семейный фотограф',
        short_name: 'MadewLove',
        start_url: '.',
        display: 'standalone',
        background_color: '#18120e',
        theme_color: '#18120e',
        orientation: 'portrait-primary',
        icons: [
          {
            src: '/favicon.png',
            sizes: '1254x1254',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/favicon.png',
            sizes: '1254x1254',
            type: 'image/png',
            purpose: 'any',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
