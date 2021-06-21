const navDisplay = () => {
  let burger = document.querySelector(".hamburger-container");
  let nav = document.querySelector(".header-nav-link");
  let main = document.querySelector(".main-background");
  let logo = document.querySelector(".logo-image");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    main.classList.toggle("foreground");
    logo.classList.toggle("foreground");
  });
};

navDisplay();
