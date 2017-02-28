const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const Server = require('karma').Server;
const path = require('path');

// TASK TO START BROWSER-SYNC SERVER

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: './src/',
      // index: 'index.html'
    },
    port: process.env.PORT || 5600;
    open: false,
    ghostMode: flase,
  });
});

// TASK TO START APP AND WATCH FOR CHANGES

gulp.task('default', ['browserSync'], () => {
  gulp.watch('./src/app/index.html').on('change', browserSync.reload);
  gulp.watch('./src/app/index.js').on('change', browserSync.reload);
  gulp.watch('./src/app/css/style.css').on('change', browserSync.reload);
});

// TASK TO RUN TESTS

gulp.task('test', (done) => {
  new Server({
    configFile: path.join(__dirname, 'karma.conf.js'),
    singleRun: true
  }, done).start();
});

