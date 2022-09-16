const menuBtn = document.getElementById("toggle_menu");
const navigationMenu = document.getElementById("nav");

document.querySelectorAll(".nav__link").forEach((element) => {
  if (element.textContent !== "Logout") {
    element.addEventListener("click", () => {
      document
        .querySelector(".section__div.visible")
        .classList.remove("visible");
      console.log(element.dataset.id);
      document.getElementById(element.dataset.id).classList.add("visible");

      document.querySelector(".selected").classList.remove("selected");
      element.classList.add("selected");

      navigationMenu.classList.toggle("showNavBar");
      menuBtn.classList.add("bars");
      menuBtn.classList.remove("cross");
    });
  }
});

menuBtn.addEventListener("click", () => {
  navigationMenu.classList.toggle("showNavBar");

  if (menuBtn.className.includes("bars")) {
    menuBtn.classList.remove("bars");
    menuBtn.classList.add("cross");
  } else {
    menuBtn.classList.add("bars");
    menuBtn.classList.remove("cross");
  }
});

window.onresize = () => {
  if (window.innerWidth >= 800) {
    console.log(window.innerWidth);
    navigationMenu.classList.remove("showNavBar");
    menuBtn.classList.remove("cross");
    menuBtn.classList.add("bars");
  }
};
