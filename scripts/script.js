document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll(".filter-buttons button");
  const cards = document.querySelectorAll(".product-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      cards.forEach(card => {
        if (filter === "all" || card.classList.contains(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
    console.log("Local Cafe website loaded.");
});

function filterProducts(category) {
  const products = document.querySelectorAll('.product-item');
  products.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


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



/*
function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}*/