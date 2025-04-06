document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("form-status");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Simulate form submission delay
      status.textContent = "Sending message...";
      status.style.color = "#555";
  
      setTimeout(() => {
        status.textContent = "Thank you for your message. We’ll get back to you soon!";
        status.style.color = "green";
        form.reset();
      }, 1000);
    });
  });
  