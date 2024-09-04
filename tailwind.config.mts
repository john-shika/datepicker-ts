import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{cjs,mjs,js,jsx,cts,mts,ts,tsx,mdx}"],
  important: "#root",
  theme: {},
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

export default config;
