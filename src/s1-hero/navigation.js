const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];

function navLinkBg() {
  document
    .querySelectorAll('.menu__link')
    .forEach((link, index) => {
      link.style.cssText = `background-color:${colors[index]}`;
    });
}

function toggleMenu() {
  document
    .querySelector('.menu-icon--open')
    .onclick = () => document
      .querySelector('.navbar__container')
      .classList
      .add('active');

  document
    .querySelector('.menu-icon--close')
    .onclick = () => document
      .querySelector('.navbar__container')
      .classList
      .remove('active');
}

export { navLinkBg, toggleMenu };