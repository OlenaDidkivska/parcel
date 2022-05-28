import './sass/main.scss';

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const body = document.querySelector(".page-body")

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    body.classList.toggle("no-scroll");
  });
})();

// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector(".page-header__btn-open-menu"),
//     closeMenuBtn: document.querySelector(".page-header__btn-close-menu"),
//     menu: document.querySelector(".page-header__menu"),
//     body: document.querySelector("body"),
//   };

//   refs.openMenuBtn.addEventListener("click", toggleMenu);
//   refs.closeMenuBtn.addEventListener("click", toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle("is-open");
//     refs.body.classList.toggle("no-scroll");
//   }
// })();