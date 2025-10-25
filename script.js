// Simple scroll animation for nav
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.8)";
    } else {
        header.style.background = "rgba(0,0,0,0.6)";
    }
});

// Optional form handler (no backend)
document.querySelector(".contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll contact you soon.");
});
// Scroll background effect
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Burger menu toggle
const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("open");
});
