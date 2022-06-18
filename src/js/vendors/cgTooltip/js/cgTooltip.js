export default class CgTooltip {
  constructor(options) {
    const defaultOptions = {
      selector: "[data-tooltip]",
      position: "bottom",
      speed: null,
      arrow: true,
      arrowType: "default",
      delay: null,
    };

    this.dataParent = "data-tooltip";
    this.dataChild = "data-tooltip-content";
    this.options = Object.assign(defaultOptions, options);
    this.tooltips = document.querySelectorAll(`${this.options.selector}`);
    this.init();
  }

  init() {
    if (this.tooltips) {
      this.tooltips.forEach((tooltip) => {
        const tooltipText = tooltip.dataset.tooltip;

        if (tooltipText) {
          tooltip.appendChild(
            this.createTooltipContent(tooltipText, this.options.arrowType)
          );
        }

        if (this.options.speed && this.isNumeric(this.options.speed)) {
          tooltip.style.setProperty(
            "--speed",
            parseFloat(this.options.speed / 1000) + "s"
          );
        }

        if (this.options.delay && this.isNumeric(this.options.delay)) {
          tooltip.style.setProperty(
            "--delay",
            parseFloat(this.options.delay / 1000) + "s"
          );
        }
      });
    }
  }

  createTooltipContent(text) {
    const tooltipContent = document.createElement("span");
    tooltipContent.setAttribute(`${this.dataChild}`, "");
    tooltipContent.textContent = text;
    tooltipContent.classList.add(`${this.options.position}`);

    if (this.options.arrow) {
      const arrowTypes = ["default", "rounded", "small", "big"];

      if (arrowTypes.indexOf(this.options.arrowType) != -1) {
        tooltipContent.classList.add(
          `arrow`,
          `arrow--${this.options.arrowType}`
        );
      } else {
        tooltipContent.classList.add(`arrow`);
      }
    }
    return tooltipContent;
  }

  isNumeric(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
  }
}
