import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

// Перемещение файлов шрифтов в build
export const fonts = () => {
  return app.gulp
    .src(app.paths.src.fonts)
    .pipe(app.plugins.plumber())
    .pipe(app.gulp.dest(app.paths.build.fonts))
    .pipe(
      fonter({
        formats: ["ttf", "woff", "woff2"],
      })
    )
    .pipe(app.gulp.dest(app.paths.build.fonts))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.paths.build.fonts))
    .pipe(app.plugins.browserSync.stream());
};
