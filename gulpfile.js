var gulp = require('gulp');
var mocha = require('gulp-mocha');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');

gulp.task('test', function () {
  return gulp.src('test/vaada_test.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function () {
  return gulp.watch(['src/*.js', 'test/*.js'], ['lint', 'test']);
})

gulp.task('lint', function () {
  return gulp.src(['src/*.js', 'test/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
})

gulp.task('default', ['lint', 'test', 'watch']);