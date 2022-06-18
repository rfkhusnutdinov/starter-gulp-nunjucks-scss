import imagemin from "gulp-imagemin";
import { mozjpeg, optipng } from "gulp-imagemin";

// Сборка картинок в режиме разработчика
export const imagesDev = () => {
  return app.gulp
    .src(app.paths.src.img)
    .pipe(app.gulp.dest(app.paths.build.img))
    .pipe(app.plugins.browserSync.stream());
};

// Сборка картинок для продакшн
export const imagesProd = () => {
  return app.gulp
    .src(app.paths.src.img)
    .pipe(
      imagemin(
        [
          mozjpeg({
            quality: 80,
            progressive: true,
          }),
          optipng({
            optimizationLevel: 2,
          }),
        ],
        {
          verbose: true,
          progressive: true,
        }
      )
    )
    .pipe(app.gulp.dest(app.paths.build.img));
};
