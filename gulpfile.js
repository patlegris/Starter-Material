/***************************************************************************/
/*                                                                         */
/* gulp start -> Launch the project                                        */
/*                                                                         */
/***************************************************************************/
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('css', function () {
    return gulp.src(['./css/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});


gulp.task('watch', ['css'], function(){
    gulp.watch([
            './css/*.scss',
        ], ['css']).on('change', browserSync.reload);
});


gulp.task('start', ['watch'], function() {
  browserSync.init({
    server: {
      baseDir: "./",
      directory: true,
        stream: false
    }
  })
});