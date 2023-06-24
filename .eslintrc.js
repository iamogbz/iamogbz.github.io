/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
  rules: {
    "arrow-body-style": [2, "as-needed"],
    "arrow-parens": [2, "as-needed"],
    "class-methods-use-this": 0,
    "no-console": 1,
    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],
    "no-trailing-spaces": 2,
    "no-underscore-dangle": [
      2,
      {
        allowAfterThis: true,
      },
    ],
    "no-use-before-define": [
      2,
      {
        functions: false,
      },
    ],
    "object-curly-newline": [
      2,
      {
        consistent: true,
        multiline: true,
      },
    ],
    "object-property-newline": [
      2,
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    "prettier/prettier": 2,
  },
};
