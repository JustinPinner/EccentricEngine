const path = require('path');

module.exports = {
  mode: 'development',
  entry: './engine.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'eccentric-engine.js',
    path: path.resolve(__dirname, 'dist')
  },
  entry: './model/gameObject.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'gameObject.js',
    path: path.resolve(__dirname, 'dist')
  }
};
