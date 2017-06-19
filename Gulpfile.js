var gulp = require('gulp')
var sass = require('gulp-sass')
var uglify = require('gulp-uglify')
var cssnano = require('gulp-cssnano')
var imagemin = require('gulp-imagemin')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('default', ['css', 'javascript', 'img'], function() {
    gulp.watch('src/static/js/*.js', ['javascript'])
    gulp.watch('src/static/scss/**/*.scss', ['css'])
})

gulp.task('img', function() {
    gulp.src('src/static/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/assets/img'))
})

gulp.task('javascript', function() {
    gulp.src('src/static/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/assets/js'))
})

gulp.task('css', function(){
    return gulp.src('src/static/scss/**/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/assets/css'))
})
