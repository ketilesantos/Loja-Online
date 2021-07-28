module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
