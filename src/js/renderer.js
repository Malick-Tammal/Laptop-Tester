/*------ Importing ipc ------*/
const { ipcRenderer, shell } = require("electron");
const ipc = ipcRenderer;

document.addEventListener("DOMContentLoaded", () => {
  ipc.send("get_data");
});

/*------ Adding close / minimize / maximize functions ------*/
const closeBtn = document.querySelector(".close-btn");
const minimizeBtn = document.querySelector(".minimize-btn");
const maximizeBtn = document.querySelector(".maximize-btn");

closeBtn.addEventListener("click", () => {
  ipc.send("close_the_app");
});
minimizeBtn.addEventListener("click", () => {
  ipc.send("minimize_the_app");
});
maximizeBtn.addEventListener("click", () => {
  ipc.send("maximize_the_app");
});

/*------ Importing app name from main process ------*/
const domTitle = document.querySelector(".dom-title");
const navTitle = document.querySelector(".logo h1");
ipc.on("app_name", (event, data) => {
  domTitle.innerText = data.title;
  navTitle.innerText = data.title;
});

/*------ Stoping app scaling in ------*/
window.onkeydown = function (evt) {
  // disable zooming
  if (
    (evt.code == "Minus" || evt.code == "Equal") &&
    (evt.ctrlKey || evt.metaKey)
  ) {
    evt.preventDefault();
  }
};

/*------ Tabs and buttons navigation ------*/
const links = document.querySelectorAll(".link");
const tabs = document.querySelectorAll(".tab");
const homeTab = document.querySelector(".home");

const pages = ["System info", "Keyboard", "Display", "Battery", "About"];
const titleIndicator = document.querySelector(".title-indicator h1");

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    homeTab.classList.remove("active");
    titleIndicator.innerText = pages[index];
    links.forEach((link) => {
      link.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    links[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  homeTab.classList.add("active");
  links.forEach((link) => {
    link.classList.remove("active");
  });
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  titleIndicator.innerText = "Home";
});

/*------ Getting user name from main process ------*/
const userNameHome = document.querySelector(".user-name");
ipc.on("user_name", (event, data) => {
  userNameHome.innerText = data.userName;
});

/*------ Starting test on click / sending to main process ------*/
const video1 = document.querySelector(".video-1");
const video2 = document.querySelector(".video-2");

video1.addEventListener("click", () => {
  shell.openExternal(
    "https://www.youtube.com/watch?v=7PIji8OubXU&t=53s&ab_channel=8KEarth"
  );
});
video2.addEventListener("click", () => {
  shell.openExternal(
    "https://www.youtube.com/watch?v=LXb3EKWsInQ&ab_channel=Jacob%2BKatieSchwarz"
  );
});

/*------ Open links in browser ------*/
const socialLinksMainBtns = document.querySelectorAll(".social-link");
const mainSocialAll = [
  "https://www.instagram.com/malick_tammal",
  "https://laptop-tester.netlify.app",
  "https://www.facebook.com/abdelmalek.tammal",
  "https://github.com/ADAMSKI-DZ/Laptop-Tester",
];

socialLinksMainBtns.forEach(function fun(value, index) {
  value.addEventListener("click", () => {
    shell.openExternal(mainSocialAll[index]);
  });
});

const allAboutSocialBtns = document.querySelectorAll(".about-link");
const aboutSocialAll = [
  "https://www.instagram.com/malick_tammal",
  "https://github.com/ADAMSKI-DZ",
  "https://www.facebook.com/abdelmalek.tammal",
  "https://codepen.io/ADAMSKIDZ",
  "https://malicktammal.netlify.app/",
];
allAboutSocialBtns.forEach(function fun(value, index) {
  value.addEventListener("click", () => {
    shell.openExternal(aboutSocialAll[index]);
  });
});
