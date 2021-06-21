const navDisplay = () => {
  let burger = document.querySelector('.hamburger-container');
  let nav = document.querySelector('.header-nav-link');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });

  
}

navDisplay();