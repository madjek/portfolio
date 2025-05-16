import { FlatCompat } from '@eslint/eslintrc';
import typescript from '@typescript-eslint/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules/**', '.next/**', 'out/**', 'dist/**'],
  },
  {
    plugins: {
      '@typescript-eslint': typescript,
      'jsx-a11y': jsxA11y,
      'react-hooks': reactHooks,
    },
  },
  {
    rules: {
      ...typescript.configs['recommended'].rules,
      ...jsxA11y.configs['recommended'].rules,
      ...reactHooks.configs['recommended'].rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
        { blankLine: 'always', prev: 'block', next: 'block' },
        {
          blankLine: 'always',
          prev: '*',
          next: ['if', 'for', 'while', 'switch'],
        },
        {
          blankLine: 'always',
          prev: ['if', 'for', 'while', 'switch'],
          next: '*',
        },
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: 'directive', next: '*' },
      ],
    },
  },

  prettierConfig,
];

export default eslintConfig;
