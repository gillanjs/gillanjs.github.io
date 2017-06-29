var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

/*
gulp.task('log', function() {
  gutil.log('== My Log Task ==')
});
*/


gulp.task('js', function() {
  gulp.src('scripts/*.js')
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest('assets'))
});

gulp.task('default', ['js']);