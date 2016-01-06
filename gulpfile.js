var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task("default", function(callback) {
  // modify some webpack config options
  var myConfig = Object.create(require('./webpack.config.js'));
  myConfig.devtool = "eval";
  myConfig.debug = true;

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    publicPath: "/" + myConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(4000, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:4000/webpack-dev-server/index.html");
  });
});
