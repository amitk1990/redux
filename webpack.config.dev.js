import path from 'path';
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: [
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
  path.join(__dirname, './clients/index.js'),

  ],
  output: {
    path: '/',
    publicPath : '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders : [
      {
        test: /\.js$/,
        path: path.join(__dirname, 'clients'),
        loaders:['babel']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
}