function slideLeft(sliderID) {
    const slider = document.getElementById(sliderID);
    slider.scrollBy({
        left: -300, // Scroll by one button width + gap
        behavior: 'smooth'
    });
}

function slideRight(sliderID) {
    const slider = document.getElementById(sliderID);
    slider.scrollBy({
        left: 300, // Scroll by one button width + gap
        behavior: 'smooth'
    });
}