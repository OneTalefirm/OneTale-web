document.addEventListener("DOMContentLoaded", function () {
    const typewriterElements = document.querySelectorAll(".typewriter");

    typewriterElements.forEach((element) => {
        const text = element.textContent;
        element.textContent = "";
        let i = 0;

        function typeWriterEffect() {
            if (i < text.length) {
                element.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
                i++;
                setTimeout(typeWriterEffect, 100);
            } else {
                const cursor = document.querySelector(".cursor");
                setInterval(() => {
                    cursor.style.visibility = cursor.style.visibility === "hidden" ? "visible" : "hidden";
                }, 500);
            }
        }

        typeWriterEffect();
    });

    // Navbar Scroll Effect
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector("nav");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Service Box Scroll Animation
    const serviceBoxes = document.querySelectorAll(".service-box");

    function revealBoxes() {
        serviceBoxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (boxTop < windowHeight - 50) {
                box.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealBoxes);
    revealBoxes();

    // Flip Card Effect on Click
    serviceBoxes.forEach((box) => {
        box.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    });
});
