var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var cache = require('gulp-cached')

gulp.task('imagemin', function() {
	return gulp.src('src/**/*.{png,jpg,ico,gif,bmp}')
		.pipe(cache("linting"))
		.pipe(imagemin())
		.pipe(gulp.dest('dist'));
})