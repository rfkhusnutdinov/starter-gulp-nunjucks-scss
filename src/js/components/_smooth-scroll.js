// * ====================================================================================================
// * Плавный скролл по якорю
// * ====================================================================================================

(function () {
  document.querySelectorAll('a[href*="#"').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let hrefItem = e.currentTarget.dataset.href;
      const scrollTarget = document.getElementById(hrefItem);

      if (scrollTarget) {
        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
})();
