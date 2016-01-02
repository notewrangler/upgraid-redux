/* eslint-env node */

import {resolve} from 'path';

export default {
  entry: [
    './src/main'
  ],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
      {test: /\.css$/, loader:'style!css'},
      {test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
    ]
  },
  resolve: {
    root: [
      resolve(__dirname, '..', 'src')
    ]
  },
  devServer: {
    contentBase: './public',
    noInfo: true,
    inline: true,
    hot: true
  }
};
