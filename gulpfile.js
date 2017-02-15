const gulp = require('gulp');
const server = require('browser-sync').create();

// bs task to start server
// run "gulp bs" to start
gulp.task('bs', () => {
    server.init({
        server: {
            baseDir: './src/app/',
            index: 'index.html'
        }
    });
});

gulp.task('watch', ['bs'], () => {
    gulp.watch('./src/app/index.html').on('change', server.reload);
    gulp.watch('./src/app/index.js').on('change', server.reload);
    gulp.watch('./src/app/css/style.css').on('change', server.reload);
});