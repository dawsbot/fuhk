var webpack = require('webpack')

module.exports = {
    entry: "./web.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js",
        library: "commonjs2"
    },
    devtool: 'eval',
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
  loaders: [
    {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015']
      }
    },
    {
      test: /\.json?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'json'
    }
  ]
}
}
