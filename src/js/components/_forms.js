// * ====================================================================================================
// * Just Validate (Валидация для форм)
// * ====================================================================================================
/*
 * Документация: https://github.com/horprogs/Just-validate
 * npm install just-validate
 */

// Подключение скрипта
// import JustValidate from 'just-validate';

// Создание экземпляра класса
// const validate = new JustValidate('#form');

// * ====================================================================================================
// * Маска телефона
// * ====================================================================================================
/*
 * Документация: https://github.com/RobinHerbots/Inputmask
 * npm install inputmask
 */

// Подключение скрипта
// import Inputmask from "inputmask";

// (function () {
//   var selectors = document.querySelectorAll("[type=tel]");

//   selectors.forEach((item) => {
//     var im = new Inputmask("+7 (999) 999-99-99");
//     im.mask(item);
//   });
// })();

// * ====================================================================================================
// * Кнопка показать пароль
// * ====================================================================================================

// const showPasswordButtons = document.querySelectorAll(".js-show-password");

// if (showPasswordButtons.length > 0) {
//   showPasswordButtons.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       const inputBox = e.currentTarget.closest(".input__box");

//       if (inputBox) {
//         const inputControl = inputBox.querySelector(".input__control");

//         if (inputControl.getAttribute("type") === "password") {
//           inputControl.setAttribute("type", "text");
//           inputControl.setAttribute("aria-label", "Скрыть текст пароля");
//           e.currentTarget.classList.add("active");
//         } else {
//           inputControl.setAttribute("type", "password");
//           inputControl.setAttribute("aria-label", "Показать текст пароля");
//           e.currentTarget.classList.remove("active");
//         }
//       }
//     });
//   });
}
