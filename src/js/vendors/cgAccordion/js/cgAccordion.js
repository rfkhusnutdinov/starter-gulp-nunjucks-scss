export default class CgAccordion {
  constructor(selector, options) {
    let defaultOptions = {
      activeClass: "active", // Класс активности для элементов
      topSelector: "[data-accordion-top]",
      bodySelector: "[data-accordion-body]",
      syncGroup: true,
      speed: 300,
    };

    this.dataAttribute = "accordion";
    this.$elements = document.querySelectorAll(selector);
    this.options = Object.assign(defaultOptions, options);

    this.init();
  }

  init() {
    if (this.$elements) {
      this.clickHandler();
    }
  }

  clickHandler() {
    this.$elements.forEach(($element) => {
      $element
        .querySelector(`${this.options.topSelector}`)
        .addEventListener("click", () => {
          if (this.isOpen($element)) {
            this.close($element);
          } else {
            this.open($element);
          }
        });
    });
  }

  isOpen($element) {
    return $element.classList.contains(`${this.options.activeClass}`)
      ? true
      : false;
  }

  open($element) {
    if (this.options.syncGroup) {
      if (
        document.querySelector(
          `.${this.options.activeClass}[data-${this.dataAttribute}=${$element.dataset.accordion}]`
        )
      ) {
        this.close(
          document.querySelector(
            `.${this.options.activeClass}[data-${this.dataAttribute}=${$element.dataset.accordion}]`
          )
        );
      }
    }

    const $elementBody = $element.querySelector(`${this.options.bodySelector}`);

    $elementBody.style.setProperty("--speed", `${this.options.speed / 1000}s`);
    $elementBody.style.maxHeight = $elementBody.scrollHeight + "px";
    $element.classList.add(`${this.options.activeClass}`);
  }

  close($element) {
    const $elementBody = $element.querySelector(`${this.options.bodySelector}`);

    $element.classList.remove(`${this.options.activeClass}`);
    $elementBody.style.maxHeight = null;
  }
}
