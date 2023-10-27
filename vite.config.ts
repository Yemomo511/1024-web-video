import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {ViteAliases} from "vite-aliases"
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  plugins: [
    react(),
    ViteAliases(),
  ],
})
