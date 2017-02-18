const gulp = require('gulp');
const browserSync = require('browser-sync').create();
var Server = require('karma').Server;


//TASK TO START BROWSER-SYNC SERVER
gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: './src/app/',
      index: 'index.html'
    }
  });
});

//TASK TO START APP AND WATCH FOR CHANGES
gulp.task('default', ['browserSync'], () => {
  gulp.watch('./src/app/index.html').on('change', browserSync.reload);
  gulp.watch('./src/app/index.js').on('change', browserSync.reload);
  gulp.watch('./src/app/css/style.css').on('change', browserSync.reload);
});

//TASK TO RUN TESTS
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});