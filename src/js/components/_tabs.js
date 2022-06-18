// * ====================================================================================================
// * cgTabs
// * ====================================================================================================
/*
 * Сниппет (+tabs)
 */

// Подключение скрипта
import CgTabs from "../vendors/cgTabs/js/cgTabs.js";
// Подлкючение стилей плагина
import "../vendors/cgTabs/scss/style.scss";

// В качетве первого параметра передается элементы внутри которого буду реализованы табы
const tabs = new CgTabs(".tabs", {
  // activeClass: "active", // Класс активности для элементов
});

// В помощь: HTML-разметка для корректной работы плагина (можно поменять все классы, но data-атрибуты доложны быть, которые служат для связи кнопок с контентом)
//<div class="tabs">
//  <div class="tabs-nav">
//    <button class="tabs-nav__button active" data-tabs-link="First">Первый</button>
//    <button class="tabs-nav__button" data-tabs-link="Second">Второй</button>
//    <button class="tabs-nav__button" data-tabs-link="Third">Третий</button>
//  </div>
//  <div class="tabs-content">
//    <div class="tabs-content__item active" data-tab="First">
//      <div class="tabs-content__wrapper">
//      </div>
//    </div>
//    <div class="tabs-content__item" data-tab="Second">
//      <div class="tabs-content__wrapper">
//      </div>
//    </div>
//    <div class="tabs-content__item" data-tab="Third">
//      <div class="tabs-content__wrapper">
//      </div>
//    </div>
//  </div>
//</div>
