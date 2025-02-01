// This event listener waits for the content to load before running the script.
document.addEventListener("DOMContentLoaded", (event) => {
  // Gets a reference to the navigation bar element by its ID.
  const header = document.getElementById("header");

  // Adds an onscroll event handler that is called every time the user scrolls.
  window.onscroll = function () {
    // Checks if the vertical scroll position is 50 pixels or more away from the top of the page.
    if (window.scrollY >= 50) {
      // If true, adds the class "nav-colour" to the nav bar, changing its appearance by adding a background colour.
      header.classList.add("nav-colour");
      // Removes the "nav-transparent" class, to ensure the nav bar is not transparent.
      header.classList.remove("nav-transparent");
    } else {
      // If the scroll position is less than 50 pixels from the top, this adds the "nav-transparent" class making the nav bar transparent.
      header.classList.add("nav-transparent");
      // Removes the "nav-colour" class, to ensure the nav bar is not coloured.
      header.classList.remove("nav-colour");
    }
  };
});
