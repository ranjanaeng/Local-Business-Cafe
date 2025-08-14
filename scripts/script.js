
// Contact form handler
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  
  // Only add event listener if the form exists (i.e., we're on the contact page)
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop form from refreshing the page

      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulated success message (replace with real backend later)
    alert("Thank you, " + name + "! Your message has been sent successfully.");
    form.reset();
  });
  } // Close the if statement
});

// Product filtering functionality
// This script will filter products based on the category selected by the user
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productSections = document.querySelectorAll(".product-section");

  function showCategory(category) {
    productSections.forEach(section => {
      if (category === "all") {
        section.style.display = "block";
      } else {
        section.style.display = (section.id === category) ? "block" : "none";
      }
    });
  }

  // Handle clicks on filter buttons
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      showCategory(category);
    });
  });

  // detect hash from category.html and filter automatically
  const hashCategory = window.location.hash.replace("#", "");
  if (hashCategory) {
    showCategory(hashCategory); // behaves like clicking the button
  } else {
    showCategory("all");
  }

  console.log("Local Cafe website loaded.");
});
