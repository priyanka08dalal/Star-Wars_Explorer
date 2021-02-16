module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    rules:{
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-undef': 'off',
      '@typescript-eslint/brace-style': 'off'
    },
    "parserOptions": {
      // Required for certain syntax usages
      "ecmaVersion": 2020,
      'parser': 'babel-eslint'
    },
  };