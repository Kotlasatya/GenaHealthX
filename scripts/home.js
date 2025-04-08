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
document.addEventListener("DOMContentLoaded", () => {
    function handleScrollAnimations() {
        const scrollItems = document.querySelectorAll(".scroll-animate");

        scrollItems.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (itemTop < screenHeight - 100) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScrollAnimations);
    handleScrollAnimations(); // run once on load
});

// Footer scroll reveal
const footer = document.querySelector('.footer');

function handleScrollReveal() {
  const triggerBottom = window.innerHeight * 0.9;
  const footerTop = footer.getBoundingClientRect().top;

  if (footerTop < triggerBottom) {
    footer.classList.add('show');
  }
}

window.addEventListener('scroll', handleScrollReveal);


// Show/hide back to top button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


