var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
  browserSync.init(["styles/css/*.css", "js/*.js", "*.html"], {
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('default', ['browser-sync']);