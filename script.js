const navDisplay = () => {
  const burger = document.querySelector('.hamburger-container');
  const nav = document.querySelector('.header-nav-link');
  const main = document.querySelector('.main-background');
  const logo = document.querySelector('.logo-image');
  const modalBtn = document.querySelector('.btn-project');
  const modalBg = document.querySelector('.modal-background');
  const close = document.querySelector('.modal-close');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    main.classList.toggle('foreground');
    logo.classList.toggle('foreground');
  });

  modalBtn.addEventListener('click', () => {
    modalBg.classList.toggle('bg-active');
  });

  close.addEventListener('click', () => {
    modalBg.classList.remove('bg-active');
  });
};

navDisplay();
