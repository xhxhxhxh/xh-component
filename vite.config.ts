import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: "packages",
      outputDir: ["packages/xh-component/es", "packages/xh-component/lib"],
      tsConfigFilePath: "tsconfig.packages.json",
      noEmitOnError: true
    }),
    DefineOptions(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'packages')
    }
  },
  build: {
    sourcemap: true,
    minify: false,
    // cssCodeSplit: true,
    rollupOptions: {
      // 忽略打包vue文件
      external: ["vue"],
      output: [
        {
          // 打包格式
          format: "umd",
          // 打包后文件名
          entryFileNames: "[name].js",
          // 让打包目录和我们目录对应
          exports: "named",
          // 配置打包根目录
          dir: "packages/xh-component",
          name: 'xhComponent',
          globals: {
            vue: "Vue",
          },
        },
        {
          // 打包格式
          format: "es",
          // 打包后文件名
          entryFileNames: "[name].mjs",
          // 让打包目录和我们目录对应
          preserveModules: true,
          // 配置打包根目录
          dir: "packages/xh-component/es",
        },
        {
          // 打包格式
          format: "cjs",
          // 打包后文件名
          entryFileNames: "[name].js",
          // 让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          // 配置打包根目录
          dir: "packages/xh-component/lib",
        },
      ],
    },
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'xh-component',
    },
  }
})
