module.exports = {
  dist: 'build',
  webpack(config) {
    config.devtool = '#source-map';
    config.output.publicPath = '/vuetify-selectpage/';
    return config;
  },
};
