let slides = document.querySelectorAll(".slide");
let dotsContainer = document.querySelector(".dots");
let index = 0;
let interval;

// Create dots dynamically
slides.forEach((_, i) => {
  let dot = document.createElement("span");
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
    resetInterval();
  });
  dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".dots span");

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active");
    dots[idx].classList.remove("active");
    if (i === idx) {
      slide.classList.add("active");
      dots[idx].classList.add("active");
    }
  });
}

function nextSlide() {
  index++;
  if (index >= slides.length) index = 0;
  showSlide(index);
}

function prevSlide() {
  index--;
  if (index < 0) index = slides.length - 1;
  showSlide(index);
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
}

// Buttons
document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  resetInterval();
});

document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
  resetInterval();
});

// Auto slide start
showSlide(index);
interval = setInterval(nextSlide, 4000);
