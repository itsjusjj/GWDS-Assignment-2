// JavaScript & Animation
// This file contains small interactive features used by the webpage.


// Wait until the HTML document has completely loaded before running the code.
// This ensures all page elements exist before JavaScript tries to access them.
document.addEventListener("DOMContentLoaded", () => {

  // Update footer year automatically

  // Find the HTML element with the id "year"
  // This element is located in the footer of the page.
  const yearEl = document.getElementById("year");

  // Check that the element exists before trying to modify it.
  // This prevents errors if the element is missing.
  if (yearEl) {

    // Get the current year from the user's system clock
    // and insert it into the footer.
    yearEl.textContent = new Date().getFullYear();

  }

  //Register the GSAP Scrolltrigger plugin
  gsap.registerPlugin(ScrollTrigger);


  //Select all dish buttons
  const dishButtons = document.querySelectorAll(".dish-button");

  //Animate the buttons when the page loads
  //Each buttons starts slightly lower and invisible
  //Then moves into place one after the other
  gsap.from(dishButtons, {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });

  //Add hover animation to each button
  dishButtons.forEach((button) => {

    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        scale: 1.08,
        duration: 0.25,
        ease: "power2.out"
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.25,
        ease: "power2.out"
      });
    });


  });


  //Select all icon buttons
  const iconButtons = document.querySelectorAll(".icon-button");

  //Select the cocktails image
  const cocktailsImage = document.querySelector(".cocktails-image");

  //Animate icon buttons when they scroll into view
  gsap.from(iconButtons, {
    scrollTrigger: {
      trigger: ".scroll-icons",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });

  //Animate cocktails image when 
  gsap.from(cocktailsImage, {
    scrollTrigger: {
      trigger: ".cocktails-image",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
});