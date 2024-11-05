const doc = document;
const menuOpen = doc.querySelector(".menu-r");
const menuClose = doc.querySelector(".close-r");
const overlay = doc.querySelector(".overlay-r");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active-r");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active-r");
});
