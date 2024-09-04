import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

/** @type {import("eslint")} */
const config = {
  rules: {
    "no-unused-vars": "warn",
    "no-undef": "warn",
  },
  ignores: [
    ".env",
    ".mypy_cache/**/*",
    "__pycache__/**/*",
    "build/**/*",
    "dist/**/*",
    "node_modules/**/*",
    "public/**/*",
    "src/styles/tailwind.css",
  ],
};

export default tseslint.config(config, {
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ["**/*.{cjs,mjs,js,jsx,cts,mts,ts,tsx,mdx}"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
});
