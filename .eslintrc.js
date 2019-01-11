module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'arrow-parens': ['error', 'as-needed'],
    'function-paren-newline': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_|ignore',
        varsIgnorePattern: '_|ignore',
      },
    ],
  },
};
