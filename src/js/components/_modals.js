// * ====================================================================================================
// * CgModal
// * ====================================================================================================
/*
 * Сниппет окна (+modal)
 * Сниппет кнопки открытия (+modal-btn)
 */

// Подключение скрипта
import CgModal from "../vendors/cgModal/js/cgModal.js";
// Подлкючение стилей плагина
import "../vendors/cgModal/scss/style.scss"; // Основные стили
import "../vendors/cgModal/scss/effects.scss"; // Эффекты появления окна

// Создание моадльных окон
const modals = new CgModal({
  // selector: "[data-modal]", // Селектор модального окна (можно сменить, но атрибут должен остаться для связи кнопки и модального окна) [default = [data-modal]]
  // activeClass: "active", // Класс активности модального окна [default = active]
  // openButton: "[data-open-modal]", // Селектор кнопки открывающей модальное окно (можно сменить, но у кнопки должен остаться атрибут, чтобы соединять кнопку с нужным модальным окном) [default = [data-open-modal]]
  // closeButton: "[data-modal-close]", // Селектор кнопки закрытия модального окна [default = [data-modal-close]]
  // contentClass: "modal__content", // Класс обертки содержимого модального окна [default = modal__content]
  // effect: null, // Эффект появления модального окна (fade, transformBottom, transformLeft, transformTop, transformRight, scaleCenter) [default = null]
  // speed: 300, // Скорость анимация [default = 300]
  // position: "center", // Позицонирование окна (center, left, right) [default = center]
});

// Структура HTML для правильной работы модальных окон
// <div class="modal" data-modal="EDIT ME">
//   <div class="modal__wrapper" data-modal-wrapper>
//     <div class="modal__content">
//       <button class="modal__close" data-modal-close aria-label="Закрыть модальное окно"></button>
//
//     </div>
//   </div>
// </div>

// HTML самой кнопки открытия модального окна
//<button data-open-modal="edit me"></button>

// Передача в глобальный контекст для браузера
// window.modals = modals;
