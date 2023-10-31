import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteAliases } from "vite-aliases";
// https://vitejs.dev/config/
export default defineConfig({
  //配置本地跨域
  assetsInclude: ["**/*.riv"],
  server: {
    proxy: {
      "/danmu": {
        target: "https://api.prprpr.me/dplayer",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/danmu/, ""),
      },
    },
  },
  css: {
    //配置css
    modules: {
      localsConvention: "camelCaseOnly",
    },
    preprocessorOptions: {
      less: {
        math: "always",
        globalVars: {
            primary: "#00B5FF",
            darkPrimary: "#8B979F",
            /**
             * #ffffff
             */
            white: "#ffffff",
            /**
             * #598eb4
             */
            specialText: "#598eb4",
            /**
             * #737373
             */
            gray: "#9B9B9B",
            lightGray: "#C1C1C1",
            /**
             * #404041
             */
            black: "#333333",
            /**
             * #4fb2ff
             */
            blue: "#72caff",
            lightBlue: "#EAF7FF",
            /**
             * #e7f7fe
             */
            background: "#F6F6F6",
            /**
             * #ff5f71
             */
            red: "#FD7E7E",
            /**
             * #fe89ff
             */
            purple: "#B888FC",

            green: "#82DD5F",

            lightGreen: "#EEF8EA",

            yellow: "#FFDF57",

            yellowLight: "#FFCC50",
            /**
             * 分割线
             */
            light: "#EFF1F4",
            darkLight: "#E1E5E9",

            badge: "#FF5F5F",

            card: "#F5F7F9",

            mediumGrey: "#D3D9E2",

            mediumWhite: "#fafafa",

            ranking: ["#FFC948", "#FD7E7E", "#4F86E0"],

            uploadingYel: "#feffe6",

        },
      },
    },
  },
  plugins: [react(), ViteAliases()],
});
