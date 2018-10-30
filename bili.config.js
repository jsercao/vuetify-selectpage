module.exports = {
  banner: true,
  moduleName: 'vuetifySelectPage',
  name: 'vuetify-selectpage',
  format: ['umd', 'umd-min', 'cjs', 'es'],
  plugins: ['vue'],
  vue: {
    css: 'dist/vuetify-selectpage.css',
  },
  external: ['vue', 'vuetify'],
  globals: {
    Vue: 'vue',
  },
};
