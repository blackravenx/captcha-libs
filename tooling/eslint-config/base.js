// eslint.config.js (Flat Config)
import stylistic from "@stylistic/eslint-plugin";

import tsParser from "@typescript-eslint/parser";

import unusedImports from "eslint-plugin-unused-imports";

/** @type {import('eslint').Linter.Config[]} */
export const baseConfig = [
  stylistic.configs["all-flat"],
  {
    "files": [
      "**/*.ts",
      "**/*.js"
    ],
    "languageOptions": {
      "parser": tsParser,
      "ecmaVersion": "latest",
      "sourceType": "module"
    },

    "plugins": {
      "@stylistic": stylistic,
      "unused-imports": unusedImports
    },
    "rules": {
      "quotes": "off",
      "@stylistic/quotes": [
        "error",
        "double"
      ],
      "@stylistic/indent": [
        "error",
        2
      ],
      "@stylistic/array-bracket-newline": [
        "error",
        {
          "multiline": true,
          "minItems": 2
        }
      ],
      "@stylistic/array-bracket-spacing": [
        "error",
        "always"
      ],
      "@stylistic/block-spacing": "error",
      "@stylistic/brace-style": [
        "error",
        "1tbs",
        { "allowSingleLine": true }
      ],
      "@stylistic/comma-dangle": [
        "error",
        "never"
      ],
      "@stylistic/quote-props": [
        "error",
        "always"
      ],
      "@stylistic/function-call-spacing": [
        "error",
        "never"
      ],
      "@stylistic/function-call-argument-newline": [
        "error",
        "consistent"
      ],
      "@stylistic/function-paren-newline": [
        "error",
        { "minItems": 3 }
      ],
      "@stylistic/arrow-spacing": [
        "error",
        {
          "before": true,
          "after": true
        }
      ],
      "@stylistic/no-confusing-arrow": "error",
      "@stylistic/newline-per-chained-call": [
        "error",
        { "ignoreChainWithDepth": 2 }
      ],
      "@stylistic/no-extra-semi": "error",
      "@stylistic/no-mixed-operators": "error",
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/no-whitespace-before-property": "error",
      "@stylistic/nonblock-statement-body-position": [
        "error",
        "beside"
      ],
      "@stylistic/max-statements-per-line": [
        "error",
        { "max": 2 }
      ],
      "@stylistic/type-named-tuple-spacing": [ "error" ],
      "@stylistic/keyword-spacing": [
        "error",
        { "before": true }
      ],
      "@stylistic/object-curly-spacing": [
        "error",
        "always",
        {
          "arraysInObjects": true,
          "objectsInObjects": true
        }
      ],
      "@stylistic/object-curly-newline": [
        "error",
        { "multiline": true }
      ],
      "@stylistic/padded-blocks": [
        "error",
        { "blocks": "never" }
      ],
      "@stylistic/padding-line-between-statements": [
        "error",
        {
          "blankLine": "always",
          "next": "*",
          "prev": "*"
        }
      ],
      "@stylistic/no-multiple-empty-lines": [
        "error",
        {
          "max": 1,
          "maxBOF": 0,
          "maxEOF": 0
        }
      ],
      "@stylistic/implicit-arrow-linebreak": [
        "error",
        "beside"
      ],
      "@stylistic/arrow-parens": [
        "error",
        "always"
      ],
      "@stylistic/rest-spread-spacing": [
        "error",
        "never"
      ],
      "@stylistic/type-annotation-spacing": [
        "error",
        {
          "before": false,
          "after": true
        }
      ],
      "@stylistic/multiline-comment-style": [
        "error",
        "separate-lines"
      ],
      "@stylistic/linebreak-style": "off",

      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          "vars": "all",
          "varsIgnorePattern": "^_",
          "args": "after-used",
          "argsIgnorePattern": "^_"
        }
      ]
    },
    "ignores": [
      "**/node_modules/**",
      "**/dist/**",
      "**/*.json"
    ]
  }
];
