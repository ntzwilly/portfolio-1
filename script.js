const navDisplay = () => {
  let burger = document.querySelector(".hamburger-container");
  let nav = document.querySelector(".header-nav-link");
  let main = document.querySelector(".main-background");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    main.classList.toggle("foreground");
  });
};

navDisplay();
