/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const indicators = document.querySelectorAll('.indicator');
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function handleNext() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function handlePrev() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    function handleIndicatorClick(event) {
        const index = Array.from(indicators).indexOf(event.target);
        if (index !== -1) {
            currentIndex = index;
            updateCarousel();
        }
    }

    function handleError(image) {
        image.src = 'images/fallback.png'; // Ensure this path is correct
    }

    nextButton.addEventListener('click', handleNext);
    prevButton.addEventListener('click', handlePrev);
    indicators.forEach(indicator => indicator.addEventListener('click', handleIndicatorClick));
});
