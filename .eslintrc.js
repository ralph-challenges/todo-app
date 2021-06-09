module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: ['eslint-config-prettier', 'plugin:react/recommended', 'airbnb'],
  plugins: ['eslint-plugin-prettier', 'react'],
  rules: {
    'prettier/prettier': 1,
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'comma-dangle': [2, 'always-multiline'],
  },
};
