
// Main script for Local Cafe website
document.addEventListener("DOMContentLoaded", function () {
  
  // Contact form handler
  const form = document.getElementById("contactForm");

  // Only add event listener if the form exists that means we are on the contact page
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
  }

  // Product filtering functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productSections = document.querySelectorAll(".product-section");

  // Function to show products by category
  const showCategory = function(category) {
    productSections.forEach(section => {
      if (category === "all") {
        section.style.display = "block";
      } else {
        section.style.display = (section.id === category) ? "block" : "none";
      }
    });
  };

  // Only initialize filtering if we have filter buttons and product sections
  if (filterButtons.length > 0 && productSections.length > 0) {

    // Handle clicks on filter buttons
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        showCategory(category);
        
        // Update active button state
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });

    // Detect hash from category.html and filter automatically
    const hashCategory = window.location.hash.replace("#", "");
    if (hashCategory && ["coffee", "drinks", "snacks"].includes(hashCategory)) {
      showCategory(hashCategory);
      // Set the corresponding button as active
      filterButtons.forEach(btn => {
        if (btn.getAttribute("data-category") === hashCategory) {
          btn.classList.add("active");
        }
      });
    } else {
      showCategory("all");
      // Set "All" button as active by default
      const allButton = document.querySelector('[data-category="all"]');
      if (allButton) {
        allButton.classList.add("active");
      }
    }
  }

  console.log("Local Cafe website loaded.");
});
