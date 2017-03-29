const config = require('../config.json')
const gulp = require('gulp')

gulp.task('server', function() {
	const staticServer = config.PATH.dist
  browserSync.init({
  	https: false,
		open: false,
		ghostMode: false,
		logLevel: 'debug',
    server: { baseDir: staticServer }
  })
  gulp.watch(config.PATH.src.styles, ['sass'])
})
