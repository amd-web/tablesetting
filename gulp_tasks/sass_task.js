const config = require('../config.json')
const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', function () {
	return gulp.src(config.PATH.src.styles)
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(gulp.dest(config.PATH.dist))
		.pipe(browserSync.stream())
})
