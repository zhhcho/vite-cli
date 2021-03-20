import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// var config = defineConfig({
//   plugins: [vue()],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         // additionalData: `$injectedColor: orange;`
//       }
//     }
//   },
//   server: {
//     port: 3000,
//   },
//   resolve: {
//     alias: {
//       '/@/' : path.resolve('./src')
//     }
//   }
// })

export default {
  alias: {
    "@":  path.resolve('./src'),
  },
  css: {
    preprocessorOptions: {
      // 设置 scss 公用变量文件
      sass: {
      }
    }
  },
  plugins: [vue()],
}
