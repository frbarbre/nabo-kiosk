// Hamburger animation toggler

var btn = document.getElementById("btn");

btn.addEventListener('click', function () {
  if (this.classList.contains("active")) {
    this.classList.remove("active")
    this.classList.add('not-active')
  }
  else {
    this.classList.add("active")
    this.classList.remove('not-active')
  }
});

// Hamburger functionality

const navToggle = document.querySelector(".hamburger-none");
const primaryNav = document.querySelector(".nav-item");
const kioskToggle = document.querySelector(".kiosken-toggle");
const bottleToggle = document.querySelector(".bottleshop-toggle");
const kaffeToggle = document.querySelector(".kaffebaren-toggle");
const godeNaboToggle = document.querySelector(".den-gode-nabo-toggle");
const bagOmToggle = document.querySelector(".bag-nabo-kiosk-toggle");
const kontaktToggle = document.querySelector(".kontakt-toggle");
const logoOpenToggle = document.querySelector(".logo-opened-toggle");
const logoClosedToggle = document.querySelector(".logo-closed-toggle");
const fillerToggle = document.querySelector(".hamburger-filler");

navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  logoOpenToggle.style.display = "block";
  logoClosedToggle.style.display = "none";
});

kioskToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  btn.classList.remove("active")
  btn.classList.add('not-active')
  logoOpenToggle.style.display = "none";
  logoClosedToggle.style.display = "block";
});

kaffeToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  btn.classList.remove("active")
  btn.classList.add('not-active')
  logoOpenToggle.style.display = "none";
  logoClosedToggle.style.display = "block";
});

bottleToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  btn.classList.remove("active")
  btn.classList.add('not-active')
  logoOpenToggle.style.display = "none";
  logoClosedToggle.style.display = "block";
});

godeNaboToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  btn.classList.remove("active")
  btn.classList.add('not-active')
  logoOpenToggle.style.display = "none";
  logoClosedToggle.style.display = "block";
});

bagOmToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  btn.classList.remove("active")
  btn.classList.add('not-active')
  logoOpenToggle.style.display = "none";
  logoClosedToggle.style.display = "block";
});

kontaktToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  btn.classList.remove("active")
  btn.classList.add('not-active')
  logoOpenToggle.style.display = "none";
  logoClosedToggle.style.display = "block";
});

logoOpenToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  btn.classList.remove("active")
  btn.classList.add('not-active')
  logoOpenToggle.style.display = "none";
  logoClosedToggle.style.display = "block";
});

fillerToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  btn.classList.remove("active")
  btn.classList.add('not-active')
  logoOpenToggle.style.display = "none";
  logoClosedToggle.style.display = "block";
});