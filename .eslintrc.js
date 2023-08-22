module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
  ],
  parser: "@typescript-eslint/parser",
  root: true,
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "import/order": [
      "error",
      {
        alphabetize: {
          order:
            "asc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
        groups: [
          "builtin", // Built-in types are first
          ["sibling", "parent"], // Then sibling and parent types. They can be mingled together
          "index", // Then the index file
          "object",
          // Then the rest: internal and external type
        ],
        warnOnUnassignedImports: true,
      },
    ],
  },
};
