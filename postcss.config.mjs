/** @type {import("postcss-load-config").Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-custom-properties": {},
    "postcss-custom-selectors": {},
    "postcss-nesting": {},
    "postcss-preset-env": {},
  },
};

export default config;
