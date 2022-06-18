export default class CgBurger {
  constructor(options) {
    const defaultOptions = {
      burgerSelector: ".js-burger-open",
      targetSelector: ".js-burger-menu",
      activeClass: "active",
      hasCloseButton: false,
      closeButtonSelector: ".js-burger-close",
      lockBody: false,
      burgerClass: "js-burger-open",
      targetClass: "js-burger-menu",
      closeClass: "js-burger-close",
      transfrom: null,
    };

    this.options = Object.assign(defaultOptions, options);
    this.burger = document.querySelector(`${this.options.burgerSelector}`);
    this.target = document.querySelector(`${this.options.targetSelector}`);
    this.body = document.body;

    this.init();
  }

  init() {
    if (this.burger && this.target) {
      this.clickHandler();
      this.addClasses();
    }
  }

  clickHandler() {
    this.burger.addEventListener("click", (e) => {
      e.stopPropagation();

      if (e.currentTarget.classList.contains(`${this.options.activeClass}`)) {
        this.close();
      } else {
        this.open();
      }
    });

    this.target.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    const targetLinks = this.target.querySelectorAll("a");

    if (targetLinks) {
      targetLinks.forEach((link) => {
        link.addEventListener("click", () => {
          this.close();
        });
      });
    }

    if (this.options.hasCloseButton === true) {
      const closeButton = this.target.querySelector(
        `${this.options.closeButtonSelector}`
      );

      if (closeButton) {
        closeButton.classList.add(`${this.options.closeClass}`);

        closeButton.addEventListener("click", () => {
          e.stopPropagation();
          this.close();
        });
      }
    }

    document.body.addEventListener("click", (e) => {
      if (this.burger.classList.contains(`${this.options.activeClass}`)) {
        this.close();
      }
    });
  }

  addClasses() {
    this.burger.classList.add("js-burger-open");
    this.target.classList.add("js-burger-menu");
  }

  open() {
    this.burger.classList.add(`${this.options.activeClass}`);
    this.target.classList.add(`${this.options.activeClass}`);
    if (this.options.lockBody === true) {
      this.body.style.overflow = "hidden";
    }
  }

  close() {
    this.burger.classList.remove(`${this.options.activeClass}`);
    this.target.classList.remove(`${this.options.activeClass}`);
    if (this.options.lockBody === true) {
      this.body.style.overflow = "";
    }
  }
}
