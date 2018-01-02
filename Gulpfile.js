const gulp = require('gulp')
const serve = require('gulp-serve')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const minifyCSS = require('gulp-csso')

gulp.task('css', () => {
    return gulp
        .src('./scss/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/assets/css'))
})

gulp.task('html', () => {
    return gulp
        .src('./docs/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./dist/docs/'))
})

gulp.task('js', () => {
    return gulp
        .src('./javascript/index.js')
        .pipe(gulp.dest('./dist/assets/js'))
})

gulp.task('serve', serve('dist'))
gulp.task('dist', ['html', 'css', 'js'])
gulp.task('default', ['dist', 'serve'])
