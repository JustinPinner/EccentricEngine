const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'Engine': './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "Eccentric.[name].js",
    libraryTarget: "umd",
    library: ["EccentricEngine", "[name]"],
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js']
  }
};
