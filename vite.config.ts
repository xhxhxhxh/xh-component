import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";

const baseBuildDir = 'packages/xh-component'
const getTargetDir = (dir: string) => {
  return resolve(baseBuildDir, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: "packages",
      outputDir: [getTargetDir('es'), getTargetDir('lib')],
      tsConfigFilePath: "tsconfig.packages.json",
    }),
    DefineOptions(),
  ],
  resolve: {
    alias: {
      '@xh-component/utils': resolve(__dirname, 'packages/utils'),
      '@xh-component/components': resolve(__dirname, 'packages/components')
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
          dir: getTargetDir('dist'),
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
          dir: getTargetDir('es'),
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
          dir: getTargetDir('lib'),
        },
      ],
    },
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'xh-component',
    },
  }
})
