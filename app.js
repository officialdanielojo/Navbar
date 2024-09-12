const openNav = document.querySelector(".open_nav");
const pagesCon = document.querySelector(".pages");

openNav.addEventListener("click", function () {
  pagesCon.classList.toggle("show_nav");
});
