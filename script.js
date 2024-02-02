const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const hamburgerOptions = document.querySelector(".hamburgerOptions");
const hamburgerOptionsWrapper = document.querySelector(
  ".hamburgerOptionsWrapper"
);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  //   hamburgerMenu.style.display =
  //     getComputedStyle(hamburgerMenu).display === "none" ? "block" : "none";
  hamburgerMenu.classList.toggle("isActive");
  hamburgerOptions.classList.toggle("isActive");
  hamburgerOptionsWrapper.classList.toggle("isActive");
});
