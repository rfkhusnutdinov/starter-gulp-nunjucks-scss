// * ====================================================================================================
// * CgTooltip
// * ====================================================================================================
/*
 * Сниппет (+tooltip)
 */

// Подключение скрипта
import CgTooltip from "../vendors/cgTooltip/js/cgTooltip.js";
// Подлкючение стилей плагина
import "../vendors/cgTooltip/scss/style.scss";

const tooltips = new CgTooltip({
  // selector: "[data-tooltip]", // Селектор для поиска тултипов (можно сменить, но у элемента должен быть data-tooltip) [default = [data-tooltip]]
  // position: "top", // Позиция тултипа относительно элемента (top, left, right, bottom) [default = bottom]
  // speed: 300, // Скорость анимации (в мс) [default = 300]
  // arrow: true, // Стрелка у тултипа [default = true]
  // arrowType: "default", // Тип стрелки [default = default]
  // delay: 0, // Задержка показа тултипа (в мс) [default = 0]
});

// Для работы плагина нужно задать нужному элементу data-tooltip="edit me"

// Глобально для бразуера
// window.tooltips = tooltips;
