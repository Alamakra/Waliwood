document.addEventListener("DOMContentLoaded", function () {
    // Preloader animation
    

    // Scroll animation
    const fadeElements = document.querySelectorAll(".fade-in");
    function handleScroll() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Active navigation link highlighting
    const navLinks = document.querySelectorAll(".navigation a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Social media hover effect
    const socialBoxes = document.querySelectorAll(".box");
    socialBoxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.transform = "scale(1.1)";
            box.style.transition = "transform 0.3s ease-in-out";
        });
        box.addEventListener("mouseleave", () => {
            box.style.transform = "scale(1)";
        });
    });

    
});
