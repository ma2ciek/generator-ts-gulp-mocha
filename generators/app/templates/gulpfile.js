var gulp = require('gulp');
var mocha = require('gulp-mocha');
var ts = require('gulp-typescript');
var del = require('del');
var run = require('run-sequence');

gulp.task('default', ['all'], function () {
    return gulp.watch('src/**/**', ['all']);
});

gulp.task('all', function (callback) {
    return run('ts', 'tests', callback);
});

gulp.task('ts', ['del'], function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts())
        .pipe(gulp.dest('build'));
});

gulp.task('tests', function () {
    return gulp.src('build/**/*-spec.js')
        .pipe(mocha({
            reporter: 'nyan'
        }));
});

gulp.task('del', function () {
    return del('build/**/**');
});
