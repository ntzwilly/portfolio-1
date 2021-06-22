const navDisplay = () => {
  const burger = document.querySelector('.hamburger-container');
  const nav = document.querySelector('.header-nav-link');
  const main = document.querySelector('.main-background');
  const logo = document.querySelector('.logo-image');
  const modalBtn = document.querySelector('.btn-project');
  const modalBg = document.querySelector('.modal-background');
  const close = document.querySelector('.modal-close');
  const linkOne = document.querySelector('.link-one');
  const linkTwo = document.querySelector('.link-two');
  const linkThree = document.querySelector('.link-three');

  function Display() {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    main.classList.toggle('foreground');
    logo.classList.toggle('foreground');
  }

  burger.addEventListener('click', () => {
    Display();
  });

  linkOne.addEventListener('click', () => {
    Display();
  });

  linkTwo.addEventListener('click', () => {
    Display();
  });

  linkThree.addEventListener('click', () => {
    Display();
  });

  modalBtn.addEventListener('click', () => {
    modalBg.classList.toggle('bg-active');
  });

  close.addEventListener('click', () => {
    modalBg.classList.remove('bg-active');
  });
};

navDisplay();
