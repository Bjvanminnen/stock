var webpack = require('webpack');
var assign = require('object-assign');
var SuccessPlugin = require('webpack-success-plugin');

var base = require('./webpack.config.base');
var host = 'localhost';
var port = 3001;

module.exports = assign({}, base, {
  entry: ['webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr']
    .concat(base.entry),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new SuccessPlugin('npm run test')
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  output: assign({}, base.output, {
    publicPath: 'http://' + host + ':' + port + '/js/'
  }),
  module: {
    loaders: [
      assign({}, base.module.loaders[0], {
        query: {
          stage: 0,
          plugins: ["react-transform", "import-asserts"],
          extra: {
            "react-transform": {
              transforms: [{
                transform: "react-transform-hmr",
                imports: ["react"],
                locals: ["module"]
              }, {
                transform: "react-transform-catch-errors",
                imports: ["react", "redbox-react"]
              }]
            }
          }
        }
      })
    ]
  }
});
