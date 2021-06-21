const navDisplay = () => {
  const burger = document.querySelector('.hamburger-container');
  const nav = document.querySelector('.header-nav-link');
  const main = document.querySelector('.main-background');
  const logo = document.querySelector('.logo-image');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    main.classList.toggle('foreground');
    logo.classList.toggle('foreground');
  });
};

navDisplay();
