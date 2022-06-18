// * ====================================================================================================
// * AJAX отправка форм
// * ====================================================================================================
const forms = document.querySelectorAll("form");

if (forms) {
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form_send(e.currentTarget);
    });
  });
}

function form_send(form) {
  var url = "send.php" + "?time=" + new Date().getTime();
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        form.setAttribute("onsubmit", "event.preventDefault();");
        // ...
      } else {
        alert(
          "При отправке формы произошла ошбика, детали смотрите в консоли."
        );
        console.log(
          "При отправке формы произошла ошбика, ниже объект с деталями ошибки:"
        );
        console.dir(xhr);
      }
    }
  };
  xhr.send(new FormData(form));
}
