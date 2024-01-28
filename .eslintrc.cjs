module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['css', 'react'],
  extends: ['airbnb', 'plugin:css/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['*.jsx', '*.cjs', '*.js'],
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: 'off',
    'no-unused-vars': 'warn',
    'react/prop-types': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
