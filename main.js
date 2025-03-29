"use strict";

const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const hamburgerIcon = document.querySelector(".icon-hamburger");
const closeIcon = document.querySelector(".icon-close");

function toggleDisplay(element) {
  const currentDisplay = window.getComputedStyle(element).display;

  if (currentDisplay === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

function setAttribute(boolean) {
  navToggle.setAttribute("aria-expanded", boolean);
}

function openToggle() {
  primaryNav.hasAttribute("data-visible")
    ? setAttribute(false)
    : setAttribute(true);

  primaryNav.toggleAttribute("data-visible");
  toggleDisplay(hamburgerIcon);
  toggleDisplay(closeIcon);
  primaryHeader.toggleAttribute("data-overlay");
}

navToggle.addEventListener("click", openToggle);
