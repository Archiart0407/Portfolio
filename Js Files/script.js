const slider = document.querySelector('.slide-track');
const slides = slider.querySelectorAll('.slide');
const slideWidth = 250; // Width of each slide
let scrollPosition = 0;

// Clone the slides and append them to the end of the slider
slides.forEach((slide) => {
  const clone = slide.cloneNode(true);
  slider.appendChild(clone);
});

// Animation function
function animate() {
  scrollPosition -= 2 ; // Adjust the scroll speed as needed
  slider.style.transform = `translateX(${scrollPosition}px)`;

  if (scrollPosition <= -slideWidth * slides.length) {
    // Reset scroll position when all cloned slides have passed
    scrollPosition = 0;
  }

  requestAnimationFrame(animate);
}

// Start the animation
animate();
