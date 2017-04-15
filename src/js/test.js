var gulp = require("gulp")
var uglify = require("gulp-uglify")
var cache = require('gulp-cached')

gulp.task('script', function() {

    gulp.src('js/*.js')
    // 2\. 压缩文件
        .pipe(cache(uglify()))
    // 3\. 另存压缩后的文件
        .pipe(gulp.dest('dist/js'))
})