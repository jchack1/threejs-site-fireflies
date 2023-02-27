const hamburgerMenu = document.querySelector("#hamburger-menu");
const mobileMenu = document.querySelector("#global-nav");
const closeMenu = document.querySelector("#close-menu");

hamburgerMenu.addEventListener("click", function () {
  // mobileMenu.className = "menu-open";
  // mobileMenu.className.add("hamburger-hide");
  mobileMenu.classList.remove("menu-close");

  mobileMenu.classList.add("menu-open");
  hamburgerMenu.classList.add("hamburger-hide");
});

closeMenu.addEventListener("click", function () {
  mobileMenu.classList.remove("menu-open");
  hamburgerMenu.classList.remove("hamburger-hide");

  mobileMenu.classList.add("menu-close");
});
