import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import ElementPlus from 'unplugin-element-plus/vite'
import windiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ElementPlus(),
    vue(),
    windiCSS(),
    federation({
      name: 'main-app',
      // filename: 'remoteEntry.js',
      // exposes: {
      //     './BasketInfo': './src/components/BasketInfo.vue',
      //     './BuyButton': './src/components/BuyButton.vue',
      // },
      remotes: {
        "app-two": "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ['vue', 'pinia','windicss']
    })
  ],
  build:{
    minify:false,
    target: ["chrome89", "edge89", "firefox89", "safari15"]
  }
})

