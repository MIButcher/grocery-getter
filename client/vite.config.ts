import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/client/',
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
  cacheDir: ".vite",
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@css': path.resolve(__dirname, 'src/css'),
      '@generated': path.resolve(__dirname, 'src/generated'),
      '@models': path.resolve(__dirname, 'src/generated/models'),
      '@apis': path.resolve(__dirname, 'src/generated/apis'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@imports': path.resolve(__dirname, 'src/imports'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@themes': path.resolve(__dirname, 'src/themes'),
      '@utilities': path.resolve(__dirname, 'src/utilities'),
    }
  }
})
