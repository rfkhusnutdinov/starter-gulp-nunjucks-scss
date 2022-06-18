// Сборка всех добавочных файлов
export const misc = () => {
  return app.gulp
    .src(app.paths.src.misc)
    .pipe(app.gulp.dest(app.paths.build.misc))
    .pipe(app.plugins.browserSync.stream());
};
