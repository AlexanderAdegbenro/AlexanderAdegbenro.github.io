
var openMenuBtn = document.getElementsByClassName("open-menu-icon");
var mobileOpenMenuBtn = document.getElementsByClassName(
  "mobile-open-menu-icon"
);
var closeMenuBtn = document.getElementsByClassName("close-menu-icon");
var bodyElement = document.getElementsByTagName("body");
var openedMenu = document.getElementById("opened-menu");

var openMenu = function () {
  openedMenu.classList.toggle("active");
  bodyElement[0].classList.toggle("active");
  openMenuBtn[0].style.opacity = 0;
  mobileOpenMenuBtn[0].style.opacity = 0;
};

var closeMenu = function () {
  openedMenu.classList.toggle("active");
  bodyElement[0].classList.toggle("active");
  openMenuBtn[0].style.opacity = 1;
  mobileOpenMenuBtn[0].style.opacity = 1;
};

openMenuBtn[0].addEventListener("click", openMenu);
mobileOpenMenuBtn[0].addEventListener("click", openMenu);
closeMenuBtn[0].addEventListener("click", closeMenu);
document.querySelectorAll(".opened-menu-btn").forEach((mobilePageLinkBtn) => {
  mobilePageLinkBtn.addEventListener("click", closeMenu);
});
