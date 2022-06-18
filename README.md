# Стартовый шаблон для верстки (Nunjucks, SCSS)

## Установка

- Установить [Node.js](https://nodejs.org/en/) актуальной версии
- Скачать сборку
- Установить gulp глобально <code>npm i -g gulp</code>
- Перейти в папку со сборкой
- Установить все необходимые зависимости <code>npm i</code>
- Для **работы в режиме разработчика** использовать команду `npm run dev`
- Для **сборки проекта** в продакшн использовать команду `npm run prod`

## Структура файлов

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

- Корень папки

  - `.editorconfig` - Настройки для редактора кода
  - `.stylelintrc` - Настройки Stylelint
  - `gulpfile.js` - Настройки Gulp
  - `package.json` - Список зависимостей

- Папка `src`

  - `src/templates` - HTML-файлы
  - `src/scss` - SCSS-файлы
  - `src/js` - JS-файлы
  - `src/fonts` - Шрифты
  - `src/img` - Изображения
  - `src/svg` - svg которые попадут в svg спрайт
  - `src/misc` - Различные файлы (фавиконки, php-скрипты и т.д.)

- Папка `build` - папка в которую попадают в результате работы сборщика **gulp**

- Папка `gulp` - папка с тасками gulp

## Команды

- `npm run dev` - Запуск для разработки
- `npm run prod` - Полная сборка проекта
- `npm run prod:html` - Сборка HTML-файлов
- `npm run prod:styles` - Компиляция файлов SCSS
- `npm run prod:scripts` - Компиляция файлов JS
- `npm run prod:fonts` - Сборка шрифтов
- `npm run prod:images` - Сборка изображений
- `npm run prod:webpImages` - Конвертация изображений в webp (для работы расскомментировать соответствующие строки в `gulpfile.js`)
- `npm run prod:svg` - Сборка svg спрайта
- `npm run prod:misc` - Сборка файлов из misc
- `npm run prod:ftp` - Выгрузить файлы на хостинг (Нужно настроить конфиг для ftp)
- `lint:styles` - Проверить файлы SCSS на наличие ошибок. Для работы необходим плагин Stylelint
- `lint:styles --fix` - Исправить ошибки в файлах SCSS
