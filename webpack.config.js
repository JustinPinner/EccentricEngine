'use strict';

module.exports = {
  mode: 'development',
  context: __dirname + "/src",
  entry: {
      'Engine': './index.js'
  },
  output: {
    path: __dirname + "/build",
    filename: "Eccentric.[name].js",
    libraryTarget: "umd",
    library: ["EccentricEngine", "[name]"],
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'inline-source-map'
};
