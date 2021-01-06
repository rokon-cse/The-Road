function cardSwitch() {
  document.querySelectorAll('.card__btn')
    .forEach(btn => {
      btn.onclick = function () {
        this
          .parentElement
          .parentElement
          .classList
          .toggle('switch');
      }
    });
}

export { cardSwitch };