import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {ViteAliases} from "vite-aliases"
// https://vitejs.dev/config/
export default defineConfig({
  //配置本地跨域
  assetsInclude:[
    "**/*.riv"
  ],
  server: {
    proxy: {
      '/danmu': {
        target: 'https://api.prprpr.me/dplayer',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/danmu/, '')
      },
    }
  },
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
