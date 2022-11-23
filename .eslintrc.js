module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-children-prop': 'off',
    'array-callback-return': 'off',
    'react/display-name': 'off',
    camelcase: 'off'
  }
}
