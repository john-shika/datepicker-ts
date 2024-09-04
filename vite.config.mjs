import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: true,
    outDir: "build",
  },
  optimizeDeps: {
    include: ["@emotion/styled"],
  },
  plugins: [
    tsconfigPaths(),
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  resolve: {
    extensions: [".cjs", ".mjs", ".js", ".mts", ".d.cts", ".d.mts", ".d.ts", ".ts", ".jsx", ".tsx", ".json"],
  },
  preview: {
    port: 5173,
  },
  server: {
    port: 3000,
  },
  ssr: {
    target: "webworker",
  },
});
