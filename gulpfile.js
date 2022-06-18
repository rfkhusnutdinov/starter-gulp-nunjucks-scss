import gulp from "gulp";
import { paths } from "./gulp/paths.js";
import { plugins } from "./gulp/plugins.js";

// Глобальные переменные
global.app = {
  paths: paths,
  gulp: gulp,
  plugins: plugins,
};

import { htmlDev, htmlProd } from "./gulp/html.js";
import { stylesDev, stylesProd } from "./gulp/styles.js";
import { server } from "./gulp/server.js";
import { clean } from "./gulp/clean.js";
import { imagesDev, imagesProd } from "./gulp/images.js";
import { fonts } from "./gulp/fonts.js";
import { misc } from "./gulp/misc.js";
import { scriptsDev, scriptsProd } from "./gulp/scripts.js";
import { svg } from "./gulp/svg.js";

// Наблюдатель за файлами
const watcher = () => {
  gulp.watch(paths.watch.html, htmlDev);
  gulp.watch(paths.watch.scss, stylesDev);
  gulp.watch(paths.watch.svg, svg);
  gulp.watch(paths.watch.js, scriptsDev);
  gulp.watch(paths.watch.img, imagesDev);
  gulp.watch(paths.watch.misc, misc);
  gulp.watch(paths.watch.fonts, fonts);
};

// Gulp таски
export const dev = gulp.series(
  clean,
  gulp.parallel(htmlDev, stylesDev, imagesDev, fonts, misc, scriptsDev, svg),
  gulp.parallel(server, watcher)
);

export const prod = gulp.series(
  clean,
  gulp.parallel(htmlProd, stylesProd, imagesProd, fonts, misc, scriptsProd, svg)
);

export default dev;
export const htmlDeploy = gulp.series(htmlProd);
export const stylesDeploy = gulp.series(stylesProd);
export const scriptsDeploy = gulp.series(scriptsProd);
export const miscDeploy = gulp.series(misc);
export const svgDeploy = gulp.series(svg);
export const fontsDeploy = gulp.series(fonts);
export const imagesDeploy = gulp.series(imagesProd);
