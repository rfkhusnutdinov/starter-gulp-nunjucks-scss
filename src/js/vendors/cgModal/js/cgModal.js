export default class CgModal {
  constructor(options) {
    const deafultOptions = {
      selector: "[data-modal]", // Селектор модального окна (можно сменить, но атрибут должен остаться для связи кнопки и модального окна) [default = [data-modal]]
      activeClass: "active", // Класс активности модального окна [default = active]
      openButton: "[data-open-modal]", // Селектор кнопки открывающей модальное окно (можно сменить, но у кнопки должен остаться атрибут, чтобы соединять кнопку с нужным модальным окном) [default = [data-open-modal]]
      closeButton: "[data-modal-close]", // Селектор кнопки закрытия модального окна [default = [data-modal-close]]
      contentClass: "modal__content", // Класс обертки содержимого модального окна [default = modal_content]
      effect: null, // Эффект появления модального окна (fade, transformBottom, transformLeft, transformTop, transformRight, scaleCenter) [default = null]
      speed: null, // Скорость анимации (в мс) [default = 300]
      position: "center", // Расположение окна (center, left, right) [default - center]
    };

    this.options = Object.assign(deafultOptions, options);
    this.modals = null;
    this.bodyElement = document.body;

    this.init();
  }

  init() {
    this.modals = document.querySelectorAll(`${this.options.selector}`);

    if (!this.modals) {
      console.error(
        `Не найден элемент с селектором "${this.options.selector}"`
      );
    } else {
      this.modals.forEach((modal) => {
        if (this.hasEffect(this.options.effect)) {
          modal.classList.add(`${this.options.effect}`);
        }

        modal.classList.add(`${this.options.position}`);

        if (this.options.speed && this.isNumeric(this.options.speed)) {
          modal.style.setProperty(
            "--speed",
            parseFloat(this.options.speed / 1000) + "s"
          );
        }
      });

      this.clickHandler();
    }
  }

  clickHandler() {
    const openModalButtons = document.querySelectorAll(
      `${this.options.openButton}`
    );

    if (openModalButtons) {
      openModalButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          this.open(`${e.currentTarget.dataset.openModal}`);
        });
      });
    } else {
      console.error(
        `Не найден элемент с селектором "${this.options.openButton}"`
      );
    }

    this.modals.forEach((modal) => {
      const closeModalButtons = modal.querySelectorAll(
        `${this.options.closeButton}`
      );

      if (closeModalButtons) {
        closeModalButtons.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const modalCurrent = e.currentTarget.closest(
              `${this.options.selector}`
            );

            if (modalCurrent) {
              this.close(modalCurrent);
            } else {
              console.error(
                `Не найден элемент с data атрибутом "${this.options.selector}"`
              );
            }
          });
        });
      }

      const modalWrapper = modal.querySelector(`.${this.options.contentClass}`);

      if (modalWrapper) {
        modalWrapper.addEventListener("click", (e) => {
          e.stopPropagation();
        });
      } else {
        console.error(
          `Не найден элемент с классом "${this.options.contentClass}"`
        );
      }
    });

    this.bodyElement.addEventListener("click", () => {
      if (
        document.querySelector(
          `${this.options.selector}.${this.options.activeClass}`
        )
      ) {
        document
          .querySelector(`${this.options.selector}.${this.options.activeClass}`)
          .classList.remove(`${this.options.activeClass}`);
        this.bodyElement.style.overflow = "";
      }
    });
  }

  open(modalData) {
    const modal = document.querySelector(`[data-modal=${modalData}]`);

    if (modal) {
      modal.classList.add(`${this.options.activeClass}`);
      this.bodyElement.style.overflow = "hidden";
    } else {
      console.error(
        `Не найдено соответствующее окно с атрибутом равным ${modalData}`
      );
    }
  }

  close(modal) {
    modal.classList.remove(`${this.options.activeClass}`);
    this.bodyElement.style.overflow = "";
  }

  closeActiveModal() {
    const modalActive = document.querySelector(
      `${this.options.selector}.${this.options.activeClass}`
    );

    if (modalActive) {
      modalActive.classList.remove(`${this.options.activeClass}`);
    }
  }

  isNumeric(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
  }

  hasEffect(string) {
    const effects = [
      "fade",
      "transformLeft",
      "transformRight",
      "transformTop",
      "transformBottom",
      "scaleCenter",
    ];

    if (string && effects.indexOf(string.toString().trim()) != -1) {
      return true;
    }
    return false;
  }
}
