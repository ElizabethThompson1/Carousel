let next = document.getElementById("next-btn");
let previous = document.getElementById("previous-btn");
const slides = document.getElementsByClassName("carousel-item");

let slidePosition = 0;
const totalSlides = slides.length;


next.addEventListener("click", moveToNextSlide);
previous.addEventListener("click", moveToPreviouseSlide);

function hideAllSlides() {
    for (const slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add(".carousel-item-hidden")
    }
}

function moveToNextSlide() {
    hideAllSlides()
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPreviouseSlide() {
    hideAllSlides()
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}




