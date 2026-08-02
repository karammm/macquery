import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from the root of a custom domain (www.macquery.in) by default. If the
// site is ever published as a bare GitHub project page instead, that lives at
// /macquery/, so set VITE_BASE=/macquery/ — otherwise every asset URL 404s.
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
