var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('style-build', function () {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('style/'));
});

gulp.task('img-build', function () {
    return gulp.src('less/img/*.*')
        .pipe(gulp.dest('style/img'));
});


gulp.task('watch', function () {
    gulp.watch('less/*', ['style-build', 'img-build']);
});

gulp.task('build', ['style-build', 'img-build']);