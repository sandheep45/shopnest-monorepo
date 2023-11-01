import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: "prisma",
    },
    rollupOptions: {
      external: "./prisma/",
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    ...VitePluginNode({
      adapter: "express",
      appPath: "./src/index.ts",
      exportName: "prisma",
      tsCompiler: "swc",
      swcOptions: {},
    }),
  ],
});
