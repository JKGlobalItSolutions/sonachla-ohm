import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // 🔥 FIXED: required for root domain like sonachala.com
  plugins: [react()],
})
