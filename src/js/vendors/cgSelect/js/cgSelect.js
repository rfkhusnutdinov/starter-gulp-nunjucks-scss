export default class CgSelect {
  constructor(selector = "select", options) {
    const defaultOptions = {
      activeClass: "active",
      topClass: "select__top",
      bodyClass: "select__body",
      itemClass: "select__item",
      hiddenClass: "select__hidden",
      disabledClass: "disabled",
    };

    this.selector = selector;
    this.options = Object.assign(defaultOptions, options);
    this.selects = document.querySelectorAll(`${this.selector}`);

    this.init();
  }

  init() {
    if (this.selects) {
      this.clickHandler();
    }
  }

  clickHandler() {
    this.selects.forEach((select) => {
      // const selectTop = select.document.querySelector
    });
  }

  open(element) {}

  close() {}

  changeTop(item, point) {}
}
