const slider = document.querySelector('.image-slider');
const images = slider.children;
let counter = 0;
const pauseDuration = 2500; // Time each image stays (between 2-3 seconds)
const transitionDuration = 500; // Smooth transition duration (0.5s)

function showNextImage() {
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
    slider.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    slider.style.transform = `translateX(-${counter * 100}%)`;
}

// Start auto-scrolling
setInterval(showNextImage, pauseDuration + transitionDuration);

document.addEventListener("DOMContentLoaded", function () {
    function handleScrollAnimations() {
        const scrollSections = document.querySelectorAll(".scroll-section");

        scrollSections.forEach((section) => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (sectionPosition < screenPosition) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScrollAnimations);
    handleScrollAnimations(); // Trigger on load in case it's already in view
});


document.addEventListener("DOMContentLoaded", function () {
    function handleScrollAnimations() {
        const scrollSections = document.querySelectorAll(".scroll-section, .full-width-image");

        scrollSections.forEach((section) => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (sectionPosition < screenPosition) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScrollAnimations);
    handleScrollAnimations(); // Initial check
});


document.addEventListener("DOMContentLoaded", function () {
    function handleScrollAnimations() {
        const animatedElements = document.querySelectorAll(".scroll-section, .scroll-image");

        animatedElements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (position < screenPosition) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScrollAnimations);
    handleScrollAnimations(); // Trigger on load
});
