const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
  // 1. where is my scss files
  return gulp.src('./sass/**/*.scss')
    // 2. pass that files through sass compiler
    .pipe(sass())
    // 3. where do I save the compiled css?
    .pipe(gulp.dest('./css'))
    // 4. stream changes to all browser
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    notify: false
  });
  gulp.watch('./sass/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;











// 'use strict';

// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync').create();
// var reload = browserSync.reload;


// sass.compiler = require('node-sass');



// gulp.task('sass', function () {
//   return gulp.src(['./sass/*.scss','./sass/responsive/*.scss'])
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });

// gulp.task('watch', function () {
//   gulp.watch(['./sass/*.scss','./sass/responsive/*.scss'], gulp.series('sass'));
// });


