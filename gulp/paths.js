import * as nodePath from "path";

// Название папки без лишних символов
const rootFolder = nodePath
  .basename(nodePath.resolve())
  .toLowerCase()
  .replaceAll(/([() ])+/g, "");

// Пути проекта
export const paths = {
  // Файлы проекта
  src: {
    html: "src/templates/*.html",
    scss: "src/scss/*.scss",
    js: "src/js/*.js",
    img: "src/img/**/*.{png,jpg,jpeg,gif,svg,webp,ico,xml,webmanifest}",
    fonts: "src/fonts/*.{ttf,eot,otf,svg,woff,woff2}",
    svg: "src/svg/*.svg",
    misc: "src/misc/**/*.*",
  },
  // Файлы готовые
  build: {
    html: "build",
    css: "build/css",
    js: "build/js",
    img: "build/img",
    fonts: "build/fonts",
    misc: "build",
    ftp: "build/**/*.*",
  },
  // Отслеживание файлов
  watch: {
    all: "build",
    html: "src/templates/**/*.html",
    scss: "src/scss/**/*.scss",
    js: "src/js/**/*.js",
    img: "src/img/**/*.{png,jpg,jpeg,gif,svg,webp,ico,xml,webmanifest}",
    fonts: "src/fonts/*.{ttf,eot,otf,svg,woff,woff2}",
    svg: "src/svg/*.svg",
    misc: "src/misc/**/*.*",
  },
  rootFolder: rootFolder,
};
