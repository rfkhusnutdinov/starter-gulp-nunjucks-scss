// Сервер
export const server = () => {
  app.plugins.browserSync.init({
    server: "./build/",
    notify: false,
    ui: false,
  });
};
