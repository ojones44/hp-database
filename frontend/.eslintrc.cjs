module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['/*.html'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    // Added below which makes the parser resolve the project configuration relative to .eslintrc.cjs
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'tailwindcss'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'no-console': 'off',
    'no-underscore-dangle': 0,
    'jsx-quotes': ['error', 'prefer-single'],
  },
};
