import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Deploy settings come from the environment so the same code works locally,
 * on GitHub Pages (project subfolder) and on a custom domain:
 *
 * - BASE_PATH      Path the site is served from, e.g. "/Dr-fitness-studio". Default "/".
 * - VITE_SITE_URL  Absolute public URL, used for social-share and SEO tags.
 *
 * The GitHub Actions workflow fills both from `actions/configure-pages`.
 */
const normalizeBase = (path = '/') => `/${path.replace(/^\/+|\/+$/g, '')}/`.replace(/^\/\/$/, '/');

const base = normalizeBase(process.env.BASE_PATH);

// Used by %VITE_SITE_URL% in index.html; no trailing slash.
process.env.VITE_SITE_URL = (process.env.VITE_SITE_URL || `http://localhost:5173${base}`).replace(/\/+$/, '');

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          mui: ['@mui/material', '@emotion/react', '@emotion/styled'],
        },
      },
    },
  },
});
