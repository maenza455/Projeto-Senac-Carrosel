let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carrossel-slide');
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    const offset = -slideIndex * 100;
    document.querySelector('.carrossel-container').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex += step);
}

// Inicializa o carrossel
showSlide(slideIndex);