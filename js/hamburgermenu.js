// This event listener waits for the content to load before running the script.
document.addEventListener("DOMContentLoaded", function () {
  // Gets references to the hamburger icon, back arrow, navigation menu, and navigation items by their IDs or class names.
  const hamburger = document.getElementById("hamburger");
  const backArrow = document.getElementById("back-arrow");
  const navMenu = document.getElementById("nav-menu");
  const navItems = document.querySelectorAll(".nav-item a");

  // Defines a function to toggle the navigation menu's visibility and the back arrow's display.
  function toggleNavMenu() {
    // Checks if the screen width is 640px or less.
    if (window.innerWidth <= 640) {
      // Checks if the navigation menu is currently visible (translateY(0%)).
      if (navMenu.style.transform === "translateY(0%)") {
        // If true, hides the menu by translating it up and then setting its display to none after a delay.
        navMenu.style.transform = "translateY(-100%)";
        setTimeout(() => {
          navMenu.style.display = "none";
        }, 300);
      } else {
        // If false, shows the menu by setting its display to flex and then translating it down after a short delay.
        navMenu.style.display = "flex";
        setTimeout(() => {
          navMenu.style.transform = "translateY(0%)";
        }, 10);
      }

      // Toggles the display of the back arrow between block and none.
      if (backArrow.style.display === "none" || backArrow.style.display === "") {
        backArrow.style.display = "block";
      } else {
        backArrow.style.display = "none";
      }
    }
  }

  // Adds an event listener to the hamburger icon to toggle the navigation menu when clicked.
  hamburger.addEventListener("click", toggleNavMenu);

  // Adds event listeners to each navigation item to toggle the navigation menu when any item is clicked.
  navItems.forEach(function (item) {
    item.addEventListener("click", toggleNavMenu);
  });

  // Adds an event listener to the back arrow to toggle the navigation menu when clicked.
  backArrow.addEventListener("click", toggleNavMenu);
});
