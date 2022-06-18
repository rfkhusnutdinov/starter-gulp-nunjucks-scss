import GulpFormatHtml from "gulp-format-html";
import nunjucks from "gulp-nunjucks";

// Сборка html файлов в режиме разработки
export const htmlDev = () => {
  return app.gulp
    .src(app.paths.src.html)
    .pipe(nunjucks.compile())
    .pipe(app.gulp.dest(app.paths.build.html))
    .pipe(app.plugins.browserSync.stream());
};

// Сборка html файлов для продакшн
export const htmlProd = () => {
  return app.gulp
    .src(app.paths.src.html)
    .pipe(nunjucks.compile())
    .pipe(
      GulpFormatHtml({
        indent_size: 2,
        preserve_newlines: false,
      })
    )
    .pipe(app.gulp.dest(app.paths.build.html))
    .pipe(app.plugins.browserSync.stream());
};
