import preferArrow from 'eslint-plugin-prefer-arrow'
import react from 'eslint-plugin-react'
import reacthooks from 'eslint-plugin-react-hooks'
import unicorn from 'eslint-plugin-unicorn'
import importplugin from 'eslint-plugin-import'
import noonlytests from 'eslint-plugin-no-only-tests'

export default [
  {
    plugins: {
      preferArrow,
      react,
      reacthooks,
      unicorn,
      importplugin,
      noonlytests,
    },
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'no-console': 'error',
      'no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '_',
        },
      ],
      'no-useless-return': 'error',
      'no-var': 'error',
      'preferArrow/prefer-arrow-functions': [
        'error',
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
      'reacthooks/exhaustive-deps': ['error'],
      'reacthooks/rules-of-hooks': 'error',
      'unicorn/no-abusive-eslint-disable': 'error',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-useless-fragment': 'error',
      'importplugin/no-unresolved': 'error',
      'importplugin/no-unassigned-import': 'error',
      'importplugin/no-unused-modules': 'error',
      'importplugin/no-useless-path-segments': 'error',
      'importplugin/no-restricted-paths': 'error',
      'no-restricted-imports': 'error',
      'noonlytests/no-only-tests': 'error',
      'importplugin/no-duplicates': 'error',
      curly: ['error', 'all'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    ignores: ['node_modules', 'libraries/components/lib/**', 'packages/website/.next/**'],
  },
]
