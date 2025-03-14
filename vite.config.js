import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Autorob-Club', // Change `base: '/'` to `base: '/src'`
  resolve: {
    alias: {
      '@': '/src' // Change `path.resolve(__dirname, 'src')` to `'/src'`
    }
  }
});
