module.exports = {
  images: {
    domains: [ ".com", "localhost", "/", "cdn.discordapp.com" ]
  },
  mode: 'production',
  optimization: {
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
        }).apply(compiler);
      },
    ],
  }
};