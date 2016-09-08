var gulp = require('gulp');
var connect = require('gulp-connect');

// Connect task
gulp.task('connect', function () {
	connect.server({
		port: 8000
	})
})