module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-extra-semi': 0,
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'prettier/prettier': [
      2,
      {
        singleQuote: true,
        trailingComma: 'es5',
        semi: false,
        jsxSingleQuote: true,
      },
    ],
    'no-process-exit': 0,
    'node/no-extraneous-import': 0,
    'node/no-extraneous-require': 0,
    'node/no-missing-import': 0,
    'node/no-missing-require': 0,
    'node/no-unsupported-features/es-syntax': 0,
    'node/no-unsupported-features/node-builtins': 0,
    'node/no-unpublished-import': 0,
    'node/no-unpublished-require': 0,
    'node/shebang': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 2,
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  }
};