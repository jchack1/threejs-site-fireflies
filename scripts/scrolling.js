//making sure we always start out at top on refresh

window.scrollTo(0, 0);

//selecting all the nav links
const aboutLink = document.querySelector(".about-link");
const cabinsLink = document.querySelector(".cabins-link");
const mapLink = document.querySelector(".map-link");
const reserveLink = document.querySelector(".reserve-link");
const logoLink = document.querySelector(".logo");

const backToTop = document.querySelector(".back-to-top");

//adding event listeners so we can scroll to each section on click

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

//scroll back to the top of page when we click on logo

logoLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({top: 0, left: 0, behavior: "smooth"});
});

backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({top: 0, left: 0, behavior: "smooth"});
});

//add/remove classes from header so we can shrink header when we're scrolling around the main content

//also add/remove inactive class to back-to-top icon so it appears only when we scoll down

window.addEventListener("scroll", function () {
  const mainTitle = document.querySelector(".main-title-section");

  const headerSection = document.querySelector(".header");

  if (window.scrollY > mainTitle.offsetTop + mainTitle.offsetHeight) {
    headerSection.classList.add("header-small");
    backToTop.classList.remove("inactive");
  } else {
    headerSection.classList.remove("header-small");
    backToTop.classList.add("inactive");
  }
});
