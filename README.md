# Стартовый шаблон (Nunjucks, SCSS) (Starter template)

## Установка (Install)

- Установить [Node.js](https://nodejs.org/en/) актуальной версии (Install actual version [Node.js](https://nodejs.org/en/))
- Скачать сборку (Download starter)
- Установить gulp глобально <code>npm i -g gulp</code> (Install gulp globally)
- Перейти в папку со сборкой (go to folder of starter)
- Установить все необходимые зависимости <code>npm i</code> (install dependencies <code>npm i</code>)
- Для **работы в режиме разработчика** использовать команду `npm run dev` (Run for development `npm run dev`)
- Для **сборки проекта** в продакшн использовать команду `npm run prod` (Run for production `npm run prod`)

## Структура файлов (File structure)

```
Project
├─ build
├─ gulp
├─ src
│ ├─ templates
│ ├─ scss
│ ├─ js
│ ├─ fonts
│ ├─ img
│ ├─ svg
│ └─ misc
├─ .editorconfig
├─ .stylelintrc
├─ gulpfile.js
└─ package.json
```

- Корень папки (root folder)

  - `.editorconfig` - Настройки для редактора кода (Settings for code editor)
  - `.stylelintrc` - Настройки Stylelint (Settings for Stylelint)
  - `gulpfile.js` - Настройки Gulp (Gulp settings)
  - `package.json` - Список зависимостей (List of dependencies)

- Папка `src` (`src` folder)

  - `src/templates` - HTML файлы (HTML files)
  - `src/scss` - SCSS-файлы (SCSS files)
  - `src/js` - JS-файлы (JS files)
  - `src/fonts` - Шрифты (Fonts)
  - `src/img` - Изображения (Images)
  - `src/svg` - svg которые попадут в svg спрайт (svg for svg-sprite)
  - `src/misc` - Различные файлы (фавиконки, php-скрипты и т.д.) (Other files)

- Папка `build` - папка в которую попадают в результате работы сборщика **gulp** (folder for results)

- Папка `gulp` - папка с тасками gulp (gulp tasks)

## Команды

- `npm run dev` - Запуск для разработки (run for development)
- `npm run prod` - Полная сборка проекта (run for production)
- `npm run prod:html` - Сборка HTML-файлов (production of HTML)
- `npm run prod:styles` - Компиляция файлов SCSS (production of SCSS)
- `npm run prod:scripts` - Компиляция файлов JS (production of JS)
- `npm run prod:fonts` - Сборка шрифтов (Production of Fonts)
- `npm run prod:images` - Сборка изображений (Production of Images)
- `npm run prod:svg` - Сборка svg спрайта (make svg sprite)
- `npm run prod:misc` - Сборка файлов из misc (Production of folder misc)
- `lint:styles` - Проверить файлы SCSS на наличие ошибок. Для работы необходим плагин Stylelint (Check scss for errors. Stylelint required)
- `lint:styles --fix` - Исправить ошибки в файлах SCSS (Fix errors in SCSS)
