const gulp = require("gulp");
const browserSync = require("browser-sync").create();

const serve = function () {
  browserSync.init({
    server: "./src"
  });

  gulp.watch("src/css/*.css", css);
  gulp.watch("src/*.html").on('change', browserSync.reload);
};

const css = function () {
  return gulp.src("src/css/*.css")
    .pipe(browserSync.stream());
};

exports.default = gulp.series(serve);
