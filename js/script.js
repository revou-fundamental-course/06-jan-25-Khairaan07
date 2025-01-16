const navSlide = () => {
 const burger = document.querySelector(".burger");
 const navLists = document.querySelector("nav");

 burger.addEventListener("click", () => {
   // Toggle nav list and burger class
   navLists.classList.toggle("nav-active");
   burger.classList.toggle("toggle-burger");
 });
};

navSlide();

window.onbeforeunload = () => {
 for (const form of document.getElementsByTagName("form")) {
   form.reset();
 }
};

document.addEventListener("DOMContentLoaded", () => {
 const welcomeMessage = document.getElementById("welcome-message");
 const userName = "Khairaan"; // Nama dinamis dapat diganti
 welcomeMessage.textContent = `Hai ${userName}, Selamat Datang`;
});
