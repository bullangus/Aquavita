// This event listener waits for the content to load before running the script.
document.addEventListener("DOMContentLoaded", (event) => {
  // Gets references to the contact form, the contact section, the main section text, and the loading spinner by their IDs or class names.
  const form = document.querySelector("#contact form");
  const contactSection = document.getElementById("contact");
  const mainSectionText = document.querySelector(".main-section-text");
  const loadingSpinner = document.querySelector(".loading-spinner");

  // Adds an event listener to the form to handle form submission.
  form.addEventListener("submit", function (e) {
    // Prevents the default form submission behavior to show design flow.
    e.preventDefault();

    // Hides the form and displays the loading spinner.
    form.style.display = "none";
    loadingSpinner.style.display = "block";

    // Simulates a delay for form processing and then updates the contact section with a confirmation message.
    setTimeout(() => {
      contactSection.innerHTML = `
        <div class="main-section-content">
          <div class="main-section-img">
            <img src="images/contact.avif" loading="lazy" alt="Close-up of a woman's ear with gold geometric earrings, staring off to the distance.">
          </div>
          <div class="main-section-text">
            <h1>Contact Ivy</h1>
            <p>Your message has been sent!</p>
            <p>Ivy Mae will be in contact with you soon.</p>
          </div>
        </div>
      `;
    }, 2000); // Delay of 2 seconds before updating the contact section.
  });
});
