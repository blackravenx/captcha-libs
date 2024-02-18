module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:typescript-sort-keys/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  ignorePatterns: [ "**/*" ],
  overrides: [
    {
      files: [ "*.json" ],
      parser: "jsonc-eslint-parser"
    },
    {
      files: [ "*.ts", "*.tsx", "*.js", "*.jsx" ],
      rules: {
        "@nx/enforce-module-boundaries": [
          "error",
          {
            allow: [],
            depConstraints: [
              {
                onlyDependOnLibsWithTags: [ "*" ],
                sourceTag: "*"
              }
            ],
            enforceBuildableLibDependency: true
          }
        ]
      }
    },
    {
      extends: [ "plugin:@nx/typescript" ],
      files: [ "*.ts", "*.tsx", "*.cjs" ],
      rules: {
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/comma-dangle": "error",
        "@typescript-eslint/comma-spacing": [
          "error", {
            after: true,
            before: false
          }
        ],
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/func-call-spacing": [ "error", "never" ],
        "@typescript-eslint/indent": [ "error", 2, { ignoredNodes: [ "TSTypeParameterInstantiation" ], "ignoreComments": false  } ],
        "@typescript-eslint/key-spacing": [ "error", { mode: "strict" } ],
        "@typescript-eslint/keyword-spacing": [ "error", { after: true } ],
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extra-parens": "error",
        "@typescript-eslint/object-curly-spacing": [ "error", "always" ],
        "@typescript-eslint/no-unused-vars":"off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "error",
          { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
        ],
        "@typescript-eslint/padding-line-between-statements": [
          "error",
          {
            blankLine: "always",
            next: [ "interface", "type" ],
            prev: "*"
          },
          {
            blankLine: "always",
            next: "*",
            prev: [ "interface", "type" ]
          },
          {
            blankLine: "always",
            next: "*",
            prev: [ "const", "let", "if" ]
          },
          {
            blankLine: "always",
            next: "return",
            prev: "*"
          },
          {
            blankLine: "always",
            next: "export",
            prev: "*"
          },
          {
            blankLine: "always",
            next: "const",
            prev: "*"
          },
          {
            blankLine: "never",
            next: "import",
            prev: "import"
          }

        ],
        "@typescript-eslint/quotes": [ "error", "double" ],
        "@typescript-eslint/semi": "error",
        "@typescript-eslint/sort-type-constituents": "error",
        "@typescript-eslint/space-before-blocks": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "array-bracket-newline": [
          "error",
          {
            minItems: 5,
            multiline: true
          }
        ],
        "array-bracket-spacing": [ "error", "always" ],
        "arrow-spacing": "error",
        "block-spacing": "error",
        "brace-style": [ "error", "stroustrup" ],
        camelcase: "off",
        "comma-dangle": "off",
        curly: [ "error", "multi-or-nest", "consistent" ],
        eqeqeq: [ "error", "always" ],
        "func-call-spacing": "off",
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never"
          }
        ],
        "import/no-duplicates": "off",
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true }
        ],
        "import/order": [
          "error", {
            groups: [
              [
                "index", "sibling", "parent", "internal", "external", "builtin"
              ]
            ],
            "newlines-between": "never"
          }
        ],
        "import/prefer-default-export": "off",
        indent: "off",
        "key-spacing": "off",
        "keyword-spacing": "off",
        "newline-per-chained-call": [
          "error",
          { ignoreChainWithDepth: 2 }
        ],
        "no-duplicate-imports": "off",
        "no-extra-parens": "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": [
          "error", {
            max: 1,
            maxBOF: 1
          }
        ],
        "no-non-null-assertion": [ "off" ],
        "no-param-reassign": [ "off" ],
        "no-return-await": [ "off" ],
        "@typescript-eslint/lines-around-comment": "error",
        "no-shadow": "off",
        "no-trailing-spaces": "error",
        "spaced-comment": ["error", "always"],
        "no-unused-vars": "off",
        "no-inline-comments": "error",
        "object-curly-newline": [
          "warn", {
            minProperties: 2,
            multiline: true
          }
        ],
        "object-curly-spacing": "off",
        "object-property-newline": [ "error", { allowAllPropertiesOnSameLine: false } ],
        "padding-line-between-statements": "off",
        "prefer-const": "error",
        "prefer-template": "error",
        "quote-props": [ "error", "as-needed" ],
        quotes: "off",
        semi: "off",
        "sort-keys-fix/sort-keys-fix": "warn",
        "space-before-blocks": "off",
        "space-in-parens": [ "error", "never" ],

        "space-infix-ops": "error",
        "tailwindcss/classnames-order": "off",

        "template-curly-spacing": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "unused-imports/no-unused-imports": [
          "warn", {
            args: "after-used",
            argsIgnorePattern: "^_",
            vars: "all",
            varsIgnorePattern: "^_|DataTablePageEvent|DataTableSortEvent|PKName|TaskTimingPayload|Credentials"
          }
        ],
      }
    },
    {
      env: { jest: true },
      files: [ "*.spec.ts", "*.spec.tsx", "*.spec.js", "*.spec.jsx" ],
      rules: {}
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "@nx", "@typescript-eslint", "typescript-sort-keys", "unused-imports", "sort-keys-fix", "import"
  ],
  root: true,
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".js", ".jsx", ".ts", ".tsx", ".vue"
        ],
        moduleDirectory: [ "node_modules" ]
      },
      "typescript": {
        "project": ["tsconfig.json", "captcha-client/tsconfig.json",  "capsolver/tsconfig.json" ]
      },
      "node": {
        "project": ["tsconfig.json", "captcha-client/tsconfig.json",  "capsolver/tsconfig.json" ]
      }
    },
    node: {
      extensions: [ ".js", ".ts" ],
    },
  }
};
