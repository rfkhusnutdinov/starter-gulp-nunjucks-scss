// * ====================================================================================================
// * CgAccordion
// * ====================================================================================================
/*
 * Сниппет (+accordion)
 */

// Подключение скрипта
import CgAccordion from "../vendors/cgAccordion/js/cgAccordion.js";
// Подлкючение стилей плагина
import "../vendors/cgAccordion/scss/style.scss"; // Основные стили

// Создание экземпляра класса для аккордеонов
const accordion = new CgAccordion("[data-accordion]", {
  // activeClass: "active", // Класс активности для элементов
  // topSelector: "[data-accordion-top]", // Селектор верхней части аккордеона (data-атрибудт должен всегда присутствовать для правильной работы)
  // bodySelector: "[data-accordion-body]", // Селектор оснвной части (data-стрибут должен всегда присутствовать для правильной работы)
  // syncGroup: true, // Синхронизация элементов из однной группы (При значении true - если один эелемент открывается, то другие закрываются)
  // speed: 300, // Скорость анимации
});

// Структура HTML для правильной работы аккордеонов (Классы могут меняться, но структура вложенности и data-атрибуты должны остаться)
// <div class="accordion" data-accordion="edit me">
//   <div class="accordion__top" data-accordion-top>
//     Edit me
//   </div>
//   <div class="accordion__body" data-accordion-body>
//     <div class="accordion__body-content">
//       Edit me
//     </div>
//   </div>
// </div>

// Глобально для бразуера
// window.accordion = accordion;
