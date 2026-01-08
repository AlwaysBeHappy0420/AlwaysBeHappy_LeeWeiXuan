// -----------------------------
// Hero Text Fade-Up Animation
// -----------------------------
window.addEventListener("load", () => {
    const heroElements = document.querySelectorAll(".hero h2, .hero p, .hero .btn");

    heroElements.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "0.8s ease";
        el.style.transitionDelay = `${index * 0.2}s`;

        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 50);
    });
});


// -----------------------------
// Scroll Reveal Animation
// -----------------------------
function revealOnScroll() {
    const revealItems = document.querySelectorAll(".reveal");

    revealItems.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// -----------------------------
// Optional: Smooth Card Hover Addon
// -----------------------------
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mousemove", () => {
        card.style.transform = "translateY(-15px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});



// Resize fix
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Select the text element
const textElement = document.querySelector("#myText");

function checkIfCentered() {
    const rect = textElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Calculate the vertical center of the viewport
    const viewportCenter = viewportHeight / 2;

    // Calculate the vertical center of the element
    const elementCenter = rect.top + rect.height / 2;

    // Check if element center is within a certain range of viewport center
    const offset = 50; // tolerance in pixels

    if (elementCenter >= viewportCenter - offset && elementCenter <= viewportCenter + offset) {
        console.log("Text is at the center of the screen!");
        textElement.style.color = "orange"; // example effect
    } else {
        textElement.style.color = "black"; // reset
    }
	if (elementCenter >= viewportCenter - offset && elementCenter <= viewportCenter + offset) {
    element.classList.add("highlight");
	} else {
    element.classList.remove("highlight");
}

}

// Run on scroll
window.addEventListener("scroll", checkIfCentered);


