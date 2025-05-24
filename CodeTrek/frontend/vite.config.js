import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    allowedHosts:["5173-naveenbasav-codetrekblo-2xrk3fc6qh9.ws-us119.gitpod.io"]
  }
})
