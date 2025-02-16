import { baseConfig } from "@captcha-libs/eslint-config/base";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...baseConfig,
  { "ignores": [ "./dist/**" ] }
];
