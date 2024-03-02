import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: 'https://jnardi86.github.io/proyecto_Neumo'
  // agregar esta linea a package-json "homepage": "https://github.com/jnardi86/proyecto_Neumo",
})
