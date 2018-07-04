var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
  gulp.src('styles/sass/main.scss')
    .pipe(sass({ includePaths: ['scss'] }))
    .pipe(gulp.dest('styles/css'));
});

gulp.task('browser-sync', function () {
  browserSync.init(["styles/css/*.css", "js/*.js", "*.html"], {
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch("styles/sass/**/*.scss", ['sass']);
});