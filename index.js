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
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'comma-spacing': ['error', { before: false, after: true }],
    'space-before-blocks': ['error', { functions: 'always', classes: 'always', keywords: 'always' }],
    'key-spacing': ['error', { afterColon: true }],
    'array-bracket-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'keyword-spacing': ['error', { before: true }],
    'brace-style': ['error', '1tbs'],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
    'space-infix-ops': ['error', { 'int32Hint': true }]
  },
};
