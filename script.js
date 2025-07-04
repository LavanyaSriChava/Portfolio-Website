document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
    document.getElementById("resume").addEventListener("click", () => {
        window.open("Resume-LavanyaSriChava.pdf", "_blank");
    });

    // GitHub redirect
    document.getElementById("github").addEventListener("click", () => {
        window.open("https://github.com/LavanyaSriChava", "_blank");
    });
// Dark mode toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Optional: toggle icon between sun and moon
    const icon = document.getElementById("theme-toggle");
    if (document.body.classList.contains("dark-mode")) {
        icon.innerHTML = "☀️";
    } else {
        icon.innerHTML = "🌙";
    }
});
// script.js
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000,   // animation duration (ms)
        once: true        // whether animation should happen only once
    });
});
document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submit (page reload)

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  // Basic validation
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Simple email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Simulate sending data (replace this with actual API call if needed)
  alert('Thank you for your message, ' + name + '!');

  // Clear form after submission
  this.reset();
});
