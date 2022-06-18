import gulpSass from "gulp-sass";
import autoPrefixer from "gulp-autoprefixer";
import mincss from "gulp-clean-css";
import rename from "gulp-rename";
import dartSass from "sass";
import groupmedia from "gulp-group-css-media-queries";

const scss = gulpSass(dartSass);

// Сборка стилей в режиме разработчика
export const stylesDev = () => {
  return app.gulp
    .src(app.paths.src.scss, { sourcemaps: true })
    .pipe(scss().on("error", scss.logError))
    .pipe(groupmedia())
    .pipe(
      autoPrefixer({
        grid: true,
        cascade: false,
        overrideBrowserslist: ["last 5 versions"],
      })
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(app.gulp.dest(app.paths.build.css, { sourcemaps: true }))
    .on("end", app.plugins.browserSync.reload);
};

// Сборка стилей для продакшн
export const stylesProd = () => {
  return app.gulp
    .src(app.paths.src.scss)
    .pipe(scss())
    .pipe(groupmedia())
    .pipe(
      autoPrefixer({
        grid: true,
        cascade: false,
        overrideBrowserslist: ["last 5 versions"],
      })
    )
    .pipe(app.gulp.dest(app.paths.build.css))
    .pipe(
      mincss({
        level: 2,
      })
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(app.gulp.dest(app.paths.build.css));
};
