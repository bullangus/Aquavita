// This event listener waits for the content to load before running the script.
document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the class 'smooth-scroll'
  const smoothScrollElements = document.querySelectorAll(".smooth-scroll");

  // Loop through each element with the class 'smooth-scroll'
  smoothScrollElements.forEach(function (element) {
    // Attach click event handler to each smooth-scroll element
    element.addEventListener("click", function (event) {
      // Prevent default link behavior to avoid jumping to the target element immediately
      event.preventDefault();

      // Get target element ID from link's href attribute
      const targetId = element.getAttribute("href");

      // Call smoothScroll function with target ID
      smoothScroll(targetId);
    });
  });
});

// Function to handle smooth scrolling
function smoothScroll(target) {
  // Get the height of the header to offset the scroll position
  const headerHeight = document.querySelector("header").offsetHeight;
  // Get the target element based on the provided target ID
  const targetElement = document.querySelector(target);
  // Calculate the target position to scroll to, accounting for the header height
  const targetPosition =
    targetElement.getBoundingClientRect().top +
    window.scrollY -
    headerHeight;

  // Smoothly scroll to the target position
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}