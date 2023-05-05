import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
// import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // cssInjectedByJsPlugin(),
    WindiCSS(),
    AutoImport({
        dts: './src/typings/auto-imports.d.ts',
        imports: [
          'vue',
          'pinia',
          'vue-router',
          // '@vueuse/core',
          // { 'ant-design-vue/es/components': ['message'] },
          // { 'ant-design-vue/es/components': ['Modal'] },
          // { 'ant-design-vue/es/components': ['notification'] }
        ],
        eslintrc: {
          enabled: false,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true
        },
        // resolvers: [AntDesignVueResolver(), VueHooksPlusResolver()]
      }),
    federation({
      name: 'app-two',
      filename: 'remoteEntry.js',
      exposes: {
          './SubTest': './src/views/test/index.vue',
      },
      shared: ['vue', 'pinia']
    })
  ],
  base: 'http://localhost:5002',
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"]
 },
 resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      // '@components': resolve(__dirname, './src/components'),
      // '@images': resolve(__dirname, './src/assets/images'),
    },
    extensions: ['.ts', '.js', '.vue', '.json'],
  },
})
