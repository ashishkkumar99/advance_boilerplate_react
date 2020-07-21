const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel'],
            // Keys matching to the right take precedence
            // so we will keep this to the right of merge configuration
            // to overwrite the common loader for js and jsx
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    hot: true,
    port: 3000,
  },
};
