import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig as defineVitestConfig } from 'vitest/config'

export default defineVitestConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
  },
})
