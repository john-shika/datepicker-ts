import eslint from "@eslint/js";
import globals from "globals";
import hooks from "eslint-plugin-react-hooks";
import refresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

/** @type {import("eslint")} */
const config = {
  rules: {},
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
  extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
  files: ["**/*.{cjs,mjs,js,jsx,cts,mts,ts,tsx,mdx}"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    "react-hooks": hooks,
    "react-refresh": refresh,
  },
  rules: {
    ...hooks.configs.recommended.rules,
    "@typescript-eslint/no-this-alias": "warn",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "valid-typeof": "warn",
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
});
