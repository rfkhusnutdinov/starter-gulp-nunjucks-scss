// * ====================================================================================================
// * Clipboard.js
// * ====================================================================================================
/*
 * Документация: https://clipboardjs.com/
 * Установка: npm install clipboard --save
 */

import ClipboardJS from "clipboard";

const clipboards = document.querySelectorAll(".btn-clipboard");

if (clipboards) {
  const clipboard = new ClipboardJS(clipboards);
}
