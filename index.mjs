import startApp from './app.mjs';

document.addEventListener('DOMContentLoaded', startApp); 

let netWorkImage = document.querySelector(".netWork-image");
let networksLogo = (document.querySelector(".network").style.display = "flex");
let modalBackdrop = document.querySelector(".modal-backdrop");
let modalOverlay = document.querySelector(".modal-overlay");
let closeBtn = document.querySelector(".close-btn");
let formSubmit = document.querySelector(".form");
let pageLoader = document.querySelector(".page-loader");
let closeMenu = document.querySelector(".close-menu-btn");
let openMenu = document.querySelector(".open-menu-btn");
let sideBar = document.querySelector(".side-bar");
let darkTheme = document.querySelector(".desktop-dark");
let lightTheme = document.querySelector(".desktop-light");
let body = document.querySelector(".body");
let form = document.querySelector(".mini-container");
let header = document.querySelector(".header");
let desktopDark = document.querySelector(".desktop-dark");
let desktopLight = document.querySelector(".desktop-light");
let light = document.querySelector(".change-light");
let mobileLight = document.querySelector(".mobile--light");
let mobileDark = document.querySelector(".mobile--dark");
let fullName = document.getElementById("name").focus();

mobileDark.addEventListener("click", () => {
  mobileDark.style.display = "none";
  mobileLight.style.display = "flex";
  body.classList.add("theme-dark");
  header.classList.add("head-theme-dark");
  form.classList.add("theme-dark");
});
mobileLight.addEventListener("click", () => {
  mobileDark.style.display = "flex";
  mobileLight.style.display = "none";
  body.classList.remove("theme-dark");
  header.classList.remove("head-theme-dark");
  form.classList.remove("theme-dark");
});
desktopDark.addEventListener("click", () => {
  darkTheme.style.display = "none";
  desktopLight.style.display = "flex";
  body.classList.add("theme-dark");
  lightNew.style.display = "flex";
  form.classList.add("theme-dark");
  header.classList.add("head-theme-dark");
  sideBar.classList.add("theme-dark");
});
darkTheme.addEventListener("click", () => {
  darkTheme.style.display = "none";
  desktopLight.style.display = "flex";
  body.classList.add("theme-dark");
  form.classList.add("theme-dark");
  header.classList.add("head-theme-dark");
  sideBar.classList.add("theme-dark");
});
lightTheme.addEventListener("click", () => {
  darkTheme.style.display = "flex";
  lightTheme.style.display = "none";
  body.classList.remove("theme-dark");
  form.classList.remove("theme-dark");
  header.classList.remove("head-theme-dark");
});
openMenu.addEventListener("click", () => {
  sideBar.style.transform = "translateX(0%)";
});

closeMenu.addEventListener("click", () => {
  sideBar.style.transform = "translateX(-100%)";
});

setTimeout(() => {
  pageLoader.style.display = "none";
}, 2000);
formSubmit.addEventListener("submit", (event) => {
  pageLoader.style.display = "flex";
  event.preventDefault();
  setTimeout(() => {
    pageLoader.style.display = "none";
  }, 2000);
  modalBackdrop.style.display = "flex";
  modalOverlay.style.display = "flex";
});

modalBackdrop.addEventListener("click", () => {
  modalBackdrop.style.display = "none";
  modalOverlay.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  modalBackdrop.style.display = "none";
  modalOverlay.style.display = "none";
});

const numberField = document.getElementById("number");

numberField.addEventListener("keydown", (e) => {
  let phone = numberField.value;
  if (
    phone.startsWith("0903") ||
    phone.startsWith("+234903") ||
    phone.startsWith("0816") ||
    phone.startsWith("+234816") ||
    phone.startsWith("0814") ||
    phone.startsWith("+234814") ||
    phone.startsWith("0816") ||
    phone.startsWith("+234816") ||
    phone.startsWith("0814") ||
    phone.startsWith("+234814") ||
    phone.startsWith("0813") ||
    phone.startsWith("+234813") ||
    phone.startsWith("0810") ||
    phone.startsWith("+234810") ||
    phone.startsWith("0706") ||
    phone.startsWith("+234706") ||
    phone.startsWith("0703") ||
    phone.startsWith("+234703") ||
    phone.startsWith("0806") ||
    phone.startsWith("+234806") ||
    phone.startsWith("0803") ||
    phone.startsWith("+234803")
  ) {
    return (netWorkImage.src = "./img/mtn.png");
  } else if (
    phone.startsWith("0802") ||
    phone.startsWith("+234802") ||
    phone.startsWith("0808") ||
    phone.startsWith("+234808") ||
    phone.startsWith("0812") ||
    phone.startsWith("+234812") ||
    phone.startsWith("0701") ||
    phone.startsWith("+234701") ||
    phone.startsWith("0708") ||
    phone.startsWith("+234708") ||
    phone.startsWith("0902") ||
    phone.startsWith("+234902")
  ) {
    return (netWorkImage.src = "./img/airtel.png");
  } else if (
    phone.startsWith("0817") ||
    phone.startsWith("+234817") ||
    phone.startsWith("0809") ||
    phone.startsWith("+234809") ||
    phone.startsWith("+234817") ||
    phone.startsWith("0818") ||
    phone.startsWith("+234818") ||
    phone.startsWith("0908") ||
    phone.startsWith("+234908")
  ) {
    return (netWorkImage.src = "./img/9mobile.png");
  } else {
    return (netWorkImage.src = "");
  }
});
