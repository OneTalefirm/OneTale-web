document.addEventListener("DOMContentLoaded", function () {
    // Typed.js setup for dynamic text
    if (document.querySelector(".multiple-text")) {
        new Typed(".multiple-text", {
            strings: ["Web Wonders", "Social Media Mastery", "Career Content", "Growth Marketing"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

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

    // Autoplay Video on Section Visibility
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

    // =========================== Footer Dynamic Load ===========================
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => console.log("Error loading footer:", error));

    // =========================== Clients Section ===========================
    const clients = document.querySelectorAll(".client-item");
    let clientIndex = 0;

    function moveNextClient() {
        clients.forEach((client, index) => {
            if (index === clientIndex) {
                client.style.transform = "translateX(0)";
                client.style.opacity = "1";
            } else {
                client.style.transform = "translateX(100vw)";
                client.style.opacity = "0";
            }
        });

        setTimeout(() => {
            clients[clientIndex].style.transform = "translateX(-100vw)";
            clients[clientIndex].style.opacity = "0";

            clientIndex = (clientIndex + 1) % clients.length;
            moveNextClient();
        }, 3000);
    }

    // Initialize clients section
    clients.forEach(client => {
        client.style.transform = "translateX(100vw)";
        client.style.opacity = "0";
        client.style.transition = "transform 1.5s ease-in-out, opacity 1s";
    });

    setTimeout(moveNextClient, 3000);
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