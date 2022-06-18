import webpackStream from "webpack-stream";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import autoprefixer from "autoprefixer";

// Сборка JS-скриптов в режиме разработчика
export const scriptsDev = () => {
  return app.gulp
    .src(app.paths.src.js)
    .pipe(app.plugins.plumber())
    .pipe(
      webpackStream({
        mode: "development",
        optimization: {
          minimize: false,
        },
        output: {
          filename: "main.min.js",
        },
        plugins: [
          new MiniCssExtractPlugin({
            filename: "../css/vendors.min.css",
          }),
        ],
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                    [
                      "@babel/preset-env",
                      {
                        targets: "defaults",
                      },
                    ],
                  ],
                },
              },
            },
            {
              test: /.s?css$/,
              use: [
                MiniCssExtractPlugin.loader, // instead of style-loader
                "css-loader",
                "sass-loader",
              ],
            },
          ],
        },
      })
    )
    .on("error", function (err) {
      console.error("WEBPACK ERROR", err);
      this.emit("end");
    })
    .pipe(app.gulp.dest(app.paths.build.js))
    .pipe(app.plugins.browserSync.stream());
};

// Сборка JS-скриптов для продакшн
export const scriptsProd = () => {
  return app.gulp
    .src(app.paths.src.js)
    .pipe(app.plugins.plumber())
    .pipe(
      webpackStream({
        mode: "production",
        output: {
          filename: "main.min.js",
        },
        optimization: {
          minimizer: ["...", new CssMinimizerPlugin()],
        },
        plugins: [
          new MiniCssExtractPlugin({
            filename: "../css/vendors.min.css",
          }),
        ],
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                    [
                      "@babel/preset-env",
                      {
                        targets: "defaults",
                      },
                    ],
                  ],
                },
              },
            },
            {
              test: /.s?css$/,
              use: [
                MiniCssExtractPlugin.loader, // instead of style-loader
                "css-loader",
                {
                  loader: "postcss-loader",
                  options: {
                    postcssOptions: {
                      plugins: [
                        [
                          autoprefixer({
                            cascade: false,
                            grid: true,
                            overrideBrowserslist: ["last 5 versions"],
                          }),
                          {},
                        ],
                      ],
                    },
                  },
                },
                "sass-loader",
              ],
            },
          ],
        },
      })
    )
    .on("error", function (err) {
      console.error("WEBPACK ERROR", err);
      this.emit("end");
    })
    .pipe(app.gulp.dest(app.paths.build.js));
};
