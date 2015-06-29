/* eslint-env node */

import webpack from 'webpack';
import defaultConfig from './webpack.default';

const port = process.env.PORT || '8080';

export default {
  ...defaultConfig,
  debug: true,
  devtool: 'eval',
  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ],
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:' + port,
    'webpack/hot/dev-server',
    './src/main'
  ]
};
