var gulp = require("gulp")
var uglify = require("gulp-uglify")
var changed = require('gulp-changed')
var path = require("path")

gulp.task('script', function() {

    gulp.src('src/js/*.js')
    // 2\. 压缩文件
        .pipe(changed("dist"))
        .pipe(uglify())
         // .pipe(uglify())
    // 3\. 另存压缩后的文件
        .pipe(gulp.dest('dist/js')) 
})


var marked = require("gulp-marked")
var rename = require("gulp-rename")

gulp.task('marked', function() {
	gulp.src('src/content/about.md')
		.pipe(changed('dist', {
			transformPath: newPath => path.join(path.dirname(newPath), path.basename(newPath, '.md'), 'indexll.html')
		}))
		.pipe(marked())
		// .pipe(rename(newPath => path.join(path.dirname(newPath), path.basename(newPath, '.md'), 'index.html')))
		.pipe(rename({suffix: '.min'}))
.pipe(gulp.dest('dist'))
})