const path = require('path');

const rootDir = __dirname;

require('dotenv').config({ path: path.join(rootDir, '..', '.env') });

module.exports = {
  dev: process.env.NODE_ENV === 'dev',
  telemetry: false,
  srcDir: path.join(rootDir, 'src'),
  buildDir: path.join(rootDir, 'dist'),
  server: { port: 8080 },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.APP_TITLE,
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"',
      },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    'nuxt-clipboard'
  ],
  // Axios module configuration
  axios: {
    baseURL: process.env.APP_URL,
    credentials: true,
    progress: false,
  },
  // Dotenv module configuration
  dotenv: {
    path: path.join(rootDir, '..'),
    only: [
      'APP_TITLE', 'APP_URL', 'NODE_ENV',
    ],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        minSize: 1000 * 244,
      },
    },
    extend(config, {
      isDev,
      isClient,
      isServer,
      loaders,
    }) {
      if (isDev) {
        config.mode = 'development';
      }
    },
  },
};
