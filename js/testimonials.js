// This event listener waits for the content to load before running the script.
document.addEventListener("DOMContentLoaded", (event) => {
  // Array of testimonial objects, each containing a quote, rating, and name. This is done so more can be added later or easily hooked into a database
  const testimonials = [
    {
      quote: "“Ivy was able to capture our products in a unique way that we have not seen by a photographer in a while. Highly recommend working with this professional young freelance photographer”",
      rating: 5,
      name: "Petr - Unique Boutique",
    },
    {
      quote: "“Working with Ivy was a fantastic experience. Her creative vision and attention to detail brought our products to life in ways we never imagined.”",
      rating: 4,
      name: "Alex - Trendy Fashion Co.",
    },
    {
      quote: "“Ivy's photography skills are exceptional. She managed to capture the essence of our brand perfectly. We will definitely work with her again.”",
      rating: 5,
      name: "Morgan - Elegant Essentials",
    },
  ];

  // Index to track the current testimonial being displayed.
  let currentTestimonial = 0;
  // Gets references to the testimonial quote, rating, name elements, the testimonial content container, and the loading bar.
  const quoteElement = document.getElementById("testimonial-quote");
  const ratingElement = document.getElementById("testimonial-rating");
  const nameElement = document.getElementById("testimonial-name");
  const testimonialContent = document.querySelector(".testimonial-content");
  const loadingBar = document.getElementById("loading-bar-inner");

  // Function to update the testimonial displayed.
  function updateTestimonial() {
    // Adds a class to hide the testimonial content with a fade-out effect.
    testimonialContent.classList.add("hidden");
    setTimeout(() => {
      // Updates the quote, rating, and name elements with the current testimonial's data.
      quoteElement.textContent = testimonials[currentTestimonial].quote;
      ratingElement.innerHTML = getStars(testimonials[currentTestimonial].rating);
      nameElement.textContent = testimonials[currentTestimonial].name;
      // Removes the class to show the testimonial content with a fade-in effect.
      testimonialContent.classList.remove("hidden");
      // Resets the loading bar animation.
      resetLoadingBar();
    }, 1000); // Delay of 1 second for the fade-out effect.
  }

  // Function to generate the star rating HTML based on the given rating.
  function getStars(rating) {
    return '<i class="fa-solid fa-star"></i>'.repeat(rating);
  }

  // Function to reset and animate the loading bar.
  function resetLoadingBar() {
    // Removes the transition for an immediate reset.
    loadingBar.style.transition = "none";
    loadingBar.style.transform = "scaleX(0)";
    setTimeout(() => {
      // Adds the transition back for the loading bar animation.
      loadingBar.style.transition = "transform 10s linear";
      loadingBar.style.transform = "scaleX(1)";
    }, 100); // Short delay to ensure the reset is visually noticeable.
  }

  // Sets an interval to update the testimonial every 10 seconds.
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
  }, 10000); // Interval of 10 seconds.

  // Initial call to reset the loading bar when the page loads.
  setTimeout(() => {
    resetLoadingBar();
  }, 100); // Short delay to ensure the loading bar reset is visually noticeable.
});
