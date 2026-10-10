const menuButton = document.querySelector(".menu-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
const navLinks = document.querySelectorAll(".dropdown-menu a");
const year = document.querySelector("#year");
const hero = document.querySelector(".hero");

year.textContent = new Date().getFullYear();

function updateMenuColor() {
  const heroBottom = hero.offsetTop + hero.offsetHeight;
  const menuIsOnWhite = window.scrollY > heroBottom - 80;
  menuButton.classList.toggle("on-light", menuIsOnWhite);
}

menuButton.addEventListener("click", () => {
  const isOpen = dropdownMenu.classList.toggle("show");
  menuButton.setAttribute("aria-expanded", isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
    dropdownMenu.classList.remove("show");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (event) => {
  const clickedMenu = dropdownMenu.contains(event.target);
  const clickedButton = menuButton.contains(event.target);

  if (!clickedMenu && !clickedButton) {
    dropdownMenu.classList.remove("show");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

updateMenuColor();
window.addEventListener("scroll", updateMenuColor);
window.addEventListener("resize", updateMenuColor);
