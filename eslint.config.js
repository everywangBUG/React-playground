import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // 双引号
      'quotes': ["error", "single"],
      // 分号结尾语句
      'semi': ["error", "always"],
      // 禁止使用 console
      'no-console': 'warn',
      // 禁止使用 debugger
      'no-debugger': 'warn',
      // 禁止使用 var
      'no-var': 'error',
      // 禁止使用未声明的变量
      'no-undeclared': 'error',
      // 禁止使用未定义的变量"]
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // 双引号
      'quotes': ['error', 'single'],
      // 分号结尾
      'semi': ['error', 'always'],
    },
  },
)
