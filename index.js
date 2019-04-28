'use strict';

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'no-console': 'off',
    eqeqeq: ['error', 'always'],
    'no-multiple-empty-lines': [2, { max: 1 }],
    'comma-spacing': [2, { before: false, after: true }],
    'space-before-blocks': [2, { functions: "always", classes: "always", keywords: "always" }],
    'key-spacing': [2, { afterColon: true }],
    'array-bracket-newline': [2, { multiline: true }],
    'object-curly-spacing': [2, "always"],
    'arrow-spacing': [2, { before: true, after: true }],
    'keyword-spacing': [2, { before: true }],
    'brace-style': [2, "1tbs"],
    'space-before-function-paren': [2, { anonymous: "always", named: "never" }],
    'space-infix-ops': [2, { "int32Hint": true }]
  },
};
