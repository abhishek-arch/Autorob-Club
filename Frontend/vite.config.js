// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//    base: './',
//   // base: '/Autorob-Club', // Change `base: '/'` to `base: '/src'`
//   resolve: {
//     alias: {
//       '@': '/src' // Change `path.resolve(__dirname, 'src')` to `'/src'`
//     }
//   }
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/Autorob-Club/tree/main/Frontend",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
});
