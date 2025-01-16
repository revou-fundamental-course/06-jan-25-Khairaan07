// Greet the user
document.addEventListener("DOMContentLoaded", () => {
 const greeting = document.querySelector(".banner p");
 greeting.textContent = `Welcome to my portfolio, MUH. KHAIRAAN KHAALISH S.!`;
});

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
 e.preventDefault();
 const name = document.getElementById("name").value;
 const email = document.getElementById("email").value;
 const message = document.getElementById("message").value;

 if (name && email && message) {
   alert(`Thank you, ${name}! Your message has been sent.`);
 } else {
   alert("Please fill in all fields.");
 }
});
