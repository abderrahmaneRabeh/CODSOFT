const sideMenu = document.querySelector("#sideMenu");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}
function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

window.addEventListener("scroll", function () {
  if (scrollY > 50) {
    document
      .querySelector("nav")
      .classList.add(
        "bg-white",
        "bg-opacity-50",
        "backdrop-blur-lg",
        "shadow-sm"
      );

    document
      .querySelector("nav ul")
      .classList.remove("bg-white", "shadow-sm", "bg-opacity-50");
  } else {
    document
      .querySelector("nav")
      .classList.remove(
        "bg-white",
        "bg-opacity-50",
        "backdrop-blur-lg",
        "shadow-sm"
      );

    document
      .querySelector("nav ul")
      .classList.add("bg-white", "shadow-sm", "bg-opacity-50");
  }
});
