const menuBtn = document.querySelector(".header__menu-btn");
const icons = menuBtn.children;
const nav = document.querySelector(".nav");
const body = document.querySelector(".body");

var toggle = false;
menuBtn.addEventListener("click", (e) => {
  toggle = !toggle;
  Array.from(icons).forEach((icon) => {
    icon.classList.remove("show");
    icon.classList.remove("hide");
  });
  if (Number(toggle) === 1) {
    icons[1].classList.add("show");
    icons[0].classList.add("hide");
    nav.classList.add("show-mobile-nav__left-right");
    nav.classList.remove("hide-mobile-nav__left-right");

    body.classList.add("body--no-scroll");
  } else {
    icons[1].classList.add("hide");
    icons[0].classList.add("show");
    nav.classList.remove("show-mobile-nav__left-right");
    nav.classList.add("hide-mobile-nav__left-right");

    body.classList.remove("body--no-scroll");
  }
});
