/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@demo/eslint-config/index.js"],
  parser: "@typescript-eslint/parser",
  rules: {
    "no-redeclare": "off",
  },
};
