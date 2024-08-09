let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        goToSlide(index);
    });
});

function goToSlide(index) {
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;

    slides[currentIndex].classList.remove('active');
    indicators[currentIndex].classList.remove('active');
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    
    currentIndex = index;

    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => {
    goToSlide(currentIndex + 1);
}, 5000);