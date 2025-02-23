<<<<<<< HEAD
// Toggle menu visibility
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Typed.js setup for the "And I'm a" text
const options = {
    strings: ["Web Wonders", "Social Media Mastery", "Career Content", "Growth Marketing"], // Add your roles here
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
};

const typed = new Typed('.multiple-text', options);

// ScrollReveal for animations on scroll
ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

ScrollReveal().reveal('.home-content, .about-content, .services-container, .portfolio-container, .contact form', {
    interval: 200
});

document.addEventListener("DOMContentLoaded", function () {
    // Play the video when the section becomes visible
    const video = document.querySelector("#what-we-do video");

    if (video) {
        video.setAttribute("autoplay", true);
        video.setAttribute("muted", true);
        video.setAttribute("loop", true);
        video.play();
    }

    // Ensure proper spacing adjustments
    const whatWeDoSection = document.querySelector("#what-we-do");
    if (whatWeDoSection) {
        whatWeDoSection.style.padding = "8rem 5%";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".testimonial-card");
    let index = 0;

    function rotateTestimonials() {
        cards.forEach((card, i) => {
            card.classList.remove("left", "active", "right");

            if (i === index) {
                card.style.transform = "scale(1)";
                card.style.opacity = "1";
                card.style.zIndex = "2";
            } else if (i === (index + 1) % cards.length) {
                card.style.transform = "translateX(120%) scale(0.85)";
                card.style.opacity = "0.8";
                card.style.zIndex = "1";
            } else {
                card.style.transform = "translateX(-120%) scale(0.85)";
                card.style.opacity = "0.8";
                card.style.zIndex = "1";
            }
        });

        index = (index + 1) % cards.length;
    }

    setInterval(rotateTestimonials, 3000);
});
// Load footer dynamically
document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => console.log("Error loading footer:", error));
=======
// Toggle menu visibility
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Typed.js setup for the "And I'm a" text
const options = {
    strings: ["Web Wonders", "Social Media Mastery", "Career Content", "Growth Marketing"], // Add your roles here
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
};

const typed = new Typed('.multiple-text', options);

// ScrollReveal for animations on scroll
ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

ScrollReveal().reveal('.home-content, .about-content, .services-container, .portfolio-container, .contact form', {
    interval: 200
});

document.addEventListener("DOMContentLoaded", function () {
    // Play the video when the section becomes visible
    const video = document.querySelector("#what-we-do video");

    if (video) {
        video.setAttribute("autoplay", true);
        video.setAttribute("muted", true);
        video.setAttribute("loop", true);
        video.play();
    }

    // Ensure proper spacing adjustments
    const whatWeDoSection = document.querySelector("#what-we-do");
    if (whatWeDoSection) {
        whatWeDoSection.style.padding = "8rem 5%";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".testimonial-card");
    let index = 0;

    function rotateTestimonials() {
        cards.forEach((card, i) => {
            card.classList.remove("left", "active", "right");

            if (i === index) {
                card.style.transform = "scale(1)";
                card.style.opacity = "1";
                card.style.zIndex = "2";
            } else if (i === (index + 1) % cards.length) {
                card.style.transform = "translateX(120%) scale(0.85)";
                card.style.opacity = "0.8";
                card.style.zIndex = "1";
            } else {
                card.style.transform = "translateX(-120%) scale(0.85)";
                card.style.opacity = "0.8";
                card.style.zIndex = "1";
            }
        });

        index = (index + 1) % cards.length;
    }

    setInterval(rotateTestimonials, 3000);
});
// Load footer dynamically
document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => console.log("Error loading footer:", error));
>>>>>>> ddd751b (Second Commit)
});