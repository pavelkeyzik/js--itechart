const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

const config = {
  entry: path.resolve(__dirname + '/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/dist')
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
  plugins: [
    new NodemonPlugin(),
  ]
};

module.exports = (env, argv) => {
  if(argv.mode === 'development') {
    config.devtool = 'source-map';
    config.watch = true;
  }
  
  return config;
};