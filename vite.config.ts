import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Change this to '/YourRepoName/' when reusing for a new subject
  base: '/WefanAdolygu/',
})
