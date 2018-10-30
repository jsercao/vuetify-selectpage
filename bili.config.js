module.exports = {
  banner: true,
  moduleName: 'vuetifySelectPage',
  name: 'vuetify-select-page',
  format: ['umd', 'umd-min', 'cjs', 'es'],
  plugins: ['vue'],
  vue: {
    css: 'dist/vuetify-select-page.css',
  },
  external: ['vue', 'vuetify'],
  globals: {
    Vue: 'vue',
  },
};
