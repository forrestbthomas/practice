
module.exports = {
  watch: true,
  target: 'web',
  entry: './app.ts',
  output: {
    path: __dirname + '/__build__',
    publicPath: '__build__/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [{
      test: /\.ts/, loaders: ['ts'], exclude: /node_modules/
    }]
  }
};
