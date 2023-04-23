// const sideMenuActivator = document.getElementsByClassName("side_menu_activator");
// const sideMenu = document.getElementsByClassName("side_menu");

// const widthChange = () => {
//     sideMenu.style.width = "100%";
// }

// sideMenuActivator.addEventListener("click", widthChange());

// const a  = document.querySelectorAll(".text");

// a.style.color = "red";

const side_menu = document.querySelector(".side_menu");
const side_menu_activator = document.querySelector(".side_menu_activator");
const audio = document.querySelector(".audio");
audio.volume = 0.2;

function show() {
  side_menu.style.visibility = "visible";
  side_menu.style.animationName = "side_menu_animation";
  side_menu_activator.style.width = "0%";
}
