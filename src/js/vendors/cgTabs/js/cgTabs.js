export default class CgTabs {
  constructor(selector, options) {
    const defaultOptions = {
      activeClass: "active",
      // activeIndex: 0, // Создать возможность менять первоначальный активный элемент
    };

    this.selector = selector;
    this.tabs = document.querySelectorAll(`${this.selector}`);
    this.options = Object.assign(defaultOptions, options);
    this.dataLink = "[data-tabs-link]";
    this.dataContentItem = "[data-tab]";

    this.init();
  }

  init() {
    if (this.tabs) {
      this.clickHandler();
    }
  }

  clickHandler() {
    this.tabs.forEach((item) => {
      const tabsLinks = item.querySelectorAll(`${this.dataLink}`);

      if (tabsLinks) {
        tabsLinks.forEach((link) => {
          link.addEventListener("click", (e) => {
            if (
              !e.currentTarget.classList.contains(`${this.options.activeClass}`)
            ) {
              const tabId = e.currentTarget.dataset.tabsLink;
              const tab = item.querySelector(`[data-tab="${tabId}"]`);

              if (tab) {
                item
                  .querySelector(`${this.dataLink}.${this.options.activeClass}`)
                  .classList.remove(`${this.options.activeClass}`);
                e.currentTarget.classList.add(`${this.options.activeClass}`);
                item
                  .querySelector(`[data-tab].${this.options.activeClass}`)
                  .classList.remove(`${this.options.activeClass}`);
                tab.classList.add(`${this.options.activeClass}`);
              }
            }
          });
        });
      }
    });
  }
}
