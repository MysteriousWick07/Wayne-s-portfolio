// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById("contactForm").reset();
  } else {
    alert("Please fill in all fields before submitting.");
  }
});

// Dark mode toggle with remembered preference
const themeToggle = document.getElementById("themeToggle");

// Check saved preference on page load
if (themeToggle) {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Toggle Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    themeToggle.textContent = "🌙 Toggle Dark Mode";
  }

  themeToggle.addEventListener("click", function(event) {
    event.preventDefault();
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      this.textContent = "☀️ Toggle Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      this.textContent = "🌙 Toggle Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });
}

// Scroll animation for project cards
const projectCards = document.querySelectorAll(".project-card");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < windowHeight - 50) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
