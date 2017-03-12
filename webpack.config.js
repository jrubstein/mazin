var path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      index: './index.js',
      commons: ['react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, 'target'),
        filename: '[hash].js'
    },
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.join('template', 'index.html')
      }),
     new webpack.optimize.UglifyJsPlugin(),
     new webpack.optimize.CommonsChunkPlugin({ name: 'commons', filename: '[hash].js' })
    ]
};
