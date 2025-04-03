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
