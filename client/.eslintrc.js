module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    "parser": "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  'rules': {
    'no-console': [
      'error',
      {
        'allow': [
          'error',
        ],
      },
    ],
    "object-shorthand": 0,
    'semi': [
      'error',
      'always',
    ],
    'indent': [
      'error',
      2,
    ],
    'vue/no-unused-components': 0,
    'vue/require-prop-types': 0,
    'vue/no-mutating-props': 0,
    'vue/no-v-html': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/attribute-hyphenation': 0,
    'vue/script-indent': [
      'error',
      2,
      {
        'baseIndent': 0,
      },
    ],
  },
  'overrides': [
    {
      'files': [
        '*.vue',
      ],
      'rules': {
        'indent': 'off',
      },
    },
  ],
};
