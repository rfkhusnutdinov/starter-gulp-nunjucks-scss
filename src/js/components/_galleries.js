// * ====================================================================================================
// * Fullscreen Lightbox (Gallery Popup)
// * ====================================================================================================
/*
 * Документация: https://fslightbox.com/javascript/documentation
 * Установка: npm install fslightbox
 * Сниппет (+fslightbox)
 */

// Подключение скрипта
// import "fslightbox";

// * ====================================================================================================
// * Masonry JS (Masonry)
// * ====================================================================================================
/*
 * Документация: https://masonry.desandro.com/
 * Установка: npm install masonry-layout
 */

// Подключение скрипта
// import Masonry from "masonry-layout";

// let msnry = new Masonry(".grid", {
//   itemSelector: ".grid__item", // селектор элемента сетки
//   columnWidth: ".grid__item", // Ширина колонок будет браться у элемента динамически
//   gutter: 10 // Лучше задавать через стили (margin-left и margin-right)
// });

// Создание и добавление новых элементов в сетку
// document.querySelector("button").addEventListener("click", (e) => {
// Создание новых элементов
//   let elems = [];
//   let fragment = document.createDocumentFragment();
//   for (var i = 0; i < 4; i++) {
//     let el = document.createElement("div");
//     el.classList.add("grid__item");
//     el.innerHTML = `<img src="https://via.placeholder.com/728x90" alt="">`;
//     fragment.appendChild(el);
//     elems.push(el);
//   }

//   document.querySelector(".grid").append(fragment); // Вставить в разметку элементы
//   msnry.appended(elems); // Добавление в сетку
//   msnry.layout(); // Перерасчет сетки
// });

// * ====================================================================================================
// * Macy JS (Masonry)
// * ====================================================================================================
/*
 * Документация: https://github.com/bigbite/macy.js
 * Установка: npm install macy
 */

// Подключение скрипта
// import Macy from "macy";

// const macy = new Macy({
//   container: ".masonry",
//   columns: 4,
//   margin: {
//     x: 20,
//     y: 20,
//   },
//   breakAt: {}, // Брейкпоинты для адаптивности
// });

// Подгрузка элементов при нажатии на кнопку
// document.querySelector("button").addEventListener("click", (e) => {
// Создание и добавление элементов в сетку
//   const el = document.createElement("div");
//   el.classList.add("grid__item");

// Функция перерасчета сетки при загрузке всех изображений
//   macy.runOnImageLoad(function () {
//     macy.recalculate(true);
//   }, true);
// });
