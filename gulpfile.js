// require
const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create();

// config file
const config = require('./config.json')


// tasks
gulp.task('html', function () {
	return gulp.src(config.PATH.src.html)
		.pipe(gulp.dest(config.PATH.dist))
		.pipe(browserSync.stream())
})

gulp.task('sass', function () {
	return gulp.src(config.PATH.src.styles)
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(gulp.dest(config.PATH.dist))
		.pipe(browserSync.stream())
})

// Static server
gulp.task('server', function() {
	
	const staticServer = config.PATH.dist

  browserSync.init({
  	https: false,
		open: false,
		ghostMode: false,
		logLevel: 'debug',
    server: { baseDir: staticServer }
  })
})

gulp.task('default', ['html', 'sass', 'server'])