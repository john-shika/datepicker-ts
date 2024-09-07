/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.{cjs,mjs,js,jsx,cts,mts,ts,tsx,mdx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

export default config;
