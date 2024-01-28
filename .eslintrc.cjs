module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['react', 'jest', 'css', 'json'],
  extends: ['airbnb', 'plugin:jest/recommended', 'plugin:css/recommended', 'plugin:json/recommended'],
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
    'max-len': [
      'error',
      { code: 160, comments: 1000 },
    ],
    'no-restricted-syntax': 'warn',
    'no-param-reassign': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'react/prop-types': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  ignorePatterns: [
    'Dockerfile',
    'node_modules',
    'dist',
    'src/http/react/asset',
    'src/http/react/style',
    'src/http/react/lib',
    '*.proto',
    '*.md',
    '*.sh',
  ],
};
