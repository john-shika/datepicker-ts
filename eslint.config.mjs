import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
import refresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import parser from "@typescript-eslint/parser";

export default tseslint.config(js.configs.recommended, {
  files: ["src/**/*.{cjs,mjs,js,jsx,cts,mts,ts,tsx,mdx,vue}"],
  languageOptions: {
    parser: parser,
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    react,
    "react-hooks": hooks,
    "react-refresh": refresh,
  },
  rules: {
    "valid-typeof": "warn",
    "react-hooks/exhaustive-deps": "off",
    "react-refresh/only-export-components": "warn",
    "prefer-const": "warn",
    "prefer-spread": "warn",
    "prefer-rest-params": "warn",
    "no-case-declarations": "warn",
    "no-cond-assign": "warn",
    "no-constant-condition": "warn",
    "no-control-regex": "warn",
    "no-empty": "warn",
    "no-fallthrough": "warn",
    "no-misleading-character-class": "warn",
    "no-prototype-builtins": "warn",
    "no-undef": "warn",
    "no-unused-vars": "warn",
    "no-useless-escape": "warn",
    "no-var": "warn",
  },
  ignores: [
    ".env",
    ".mypy_cache",
    "__pycache__",
    "build",
    "dist",
    "node_modules",
    "public",
    "src/styles/tailwind.css",
  ],
});
