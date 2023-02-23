import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({
    entryRoot: "src",
    outputDir: ["./dist/es", "./dist/lib"],
    tsConfigFilePath: "tsconfig.json",
  }), DefineOptions()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    sourcemap: true,
    minify: false,
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
          dir: "dist",
          name: 'index',
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
          exports: "named",
          // 配置打包根目录
          dir: "./dist/es",
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
          dir: "dist/lib",
        },
      ],
    },
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'xh-component',
    },
  }
})
