module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  'rules': {
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-type-assertions': 'off',
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
      }
    ],
    '@typescript-eslint/indent': [
      'error',
      2,
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'semi',
          'requireLast': true,
        },
        'singleline': {
          'delimiter': 'semi',
          'requireLast': false,
        },
      },
    ],
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single',
    ],
    '@typescript-eslint/semi': [
      'error',
      'always',
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    'arrow-body-style': 'error',
    'camelcase': 'error',
    'eqeqeq': [
      'error',
      'smart',
    ],
    'semi': [
      'error',
      'always',
    ],
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined',
    ],
    'id-match': 'error',
    'no-eval': 'error',
    'no-redeclare': 'error',
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'padding-line-between-statements': [
      'error',
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'return',
      },
    ],
    'prefer-const': 'error',
    'spaced-comment': 'error',
    '@typescript-eslint/tslint/config': [
      'error',
      {
        'rules': {
          'import-spacing': false,
          'one-line': [
            true,
            'check-open-brace',
            'check-whitespace',
          ],
          'whitespace': [
            true,
            'check-branch',
            'check-decl',
            'check-operator',
            'check-separator',
            'check-type',
          ],
        },
      },
    ],
  },
};
