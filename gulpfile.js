// config file
const config = require('./config.json')

// require
const gulp = require('gulp')

// tasks
gulp.task('default', [], function () {
	return gulp.src(config.PATH.src.html)
		.pipe(gulp.dest(config.PATH.dist))
})
