window.scrollTo(0, 0);

document.querySelectorAll(".nav-link").forEach((x) => {
  console.log(x);
  x.addEventListener("click", (e) => {
    e.preventDefault();
    const id = this.getAttribute("href");
    console.log(id);
    document
      .querySelector(id.split("#")[1])
      .scrollIntoView({behavior: "smooth"});
  });
});

const aboutLink = document.querySelector(".about-link");
const cabinsLink = document.querySelector(".cabins-link");
const mapLink = document.querySelector(".map-link");
const reserveLink = document.querySelector(".reserve-link");
const logoLink = document.querySelector(".logo");

aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#about-section").scrollIntoView({behavior: "smooth"});
});

cabinsLink.addEventListener("click", (e) => {
  e.preventDefault();

  document.querySelector("#cabin-section").scrollIntoView({behavior: "smooth"});
});

mapLink.addEventListener("click", (e) => {
  e.preventDefault();

  document.querySelector("#map-section").scrollIntoView({behavior: "smooth"});
});

reserveLink.addEventListener("click", (e) => {
  e.preventDefault();

  document
    .querySelector("#reserve-section")
    .scrollIntoView({behavior: "smooth"});
});

logoLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({top: 0, left: 0, behavior: "smooth"});
});

//nav classes

window.addEventListener("scroll", function () {
  const mainTitle = document.querySelector(".main-title-section");

  const headerSection = document.querySelector(".header");

  if (window.scrollY > mainTitle.offsetTop + mainTitle.offsetHeight) {
    headerSection.classList.add("header-small");
  } else {
    headerSection.classList.remove("header-small");
  }
});
