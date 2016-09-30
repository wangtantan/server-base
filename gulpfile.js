'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

gulp.task('serve', function () {
  $.nodemon({
    verbose: true,
    script: 'app.js',
    ext: 'js,json',
    ignore: [
      'node_modules/*',
      'test/*',
      'gulpfile.js',
    ],
    env: {
      'NODE_ENV': 'development',
      'NODE_CONFIG_STRICT_MODE': true,
    },
  });
});

gulp.task('net', function () {
  $.nodemon({
    verbose: true,
    script: 'netServer.js',
    ext: 'js,json',
    ignore: [
      'node_modules/*',
      'test/*',
      'gulpfile.js',
    ],
    env: {
      'NODE_ENV': 'development',
    },
  });
});

gulp.task('init', function () {
  $.run('sh scripts/init.sh').exec();
});

gulp.task('test', function () {
  $.nodemon({
    verbose: true,
    script: 'apptest.js',
    ext: 'js,json',
    ignore: [
      'node_modules/*',
      'test/*',
      'gulpfile.js',
    ],
    env: {
      'NODE_ENV': 'development',
      'NODE_CONFIG_STRICT_MODE': true,
    },
  });
});
