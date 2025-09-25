import path from 'path';
import { defineConfig } from 'vite';
import { analyzer } from 'vite-bundle-analyzer';
import stylelintPlugin from 'vite-plugin-stylelint';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/zendu_app_tg_mini_app/' : '/',
  plugins: [
    react(),
    svgr({ include: '**/*.svg' }),
    stylelintPlugin({
      files: ['**/*.scss'],
    }),
    analyzer({
      analyzerMode: 'static',
    }),
  ],
  server: {
    port: 5050,
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
}));
