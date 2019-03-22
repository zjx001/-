const gulp = require('gulp')
const gulpsass = require('gulp-sass')
const cssmin = require('gulp-clean-css')
const server = require('gulp-webserver')

//编译sass
gulp.task('Sass',()=>{
	gulp.src('./scss/**/*.scss')
	.pipe(gulpsass())
	.pipe(gulp.dest('./css'))
})

//监听scss
gulp.task('watch', () => {
    return gulp.watch('./scss/**/*.scss', gulp.series('Sass'))
})

gulp.task('dev', gulp.parallel('Sass', 'watch'))