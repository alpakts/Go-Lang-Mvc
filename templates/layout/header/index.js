export default class Header {
  constructor() {
    this.init();
  }
  init() {
    debugger;
    document.addEventListener("DOMContentLoaded", function () {
      const menuToggle = document.querySelector(".menu-toggle");
      const nav = document.querySelector("nav ul");

      menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
      });
    });
    this.headerEvent();
  }
  headerEvent() {
    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function () {
      if (window.scrollY > lastScrollY && window.scrollY > 150) {
        // Aşağı kaydırılıyor ve belli bir seviyenin altında
        header.classList.add("hidden");
        header.style.position = "unset";
      } else if (window.scrollY < lastScrollY) {
        // Yukarı kaydırılıyor
        header.classList.remove("hidden");
        header.style.position = "fixed";

      }
      lastScrollY = window.scrollY;
    });
  }
}
