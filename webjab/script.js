// Funcionalidad del carrusel
document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    let currentIndex = 0;
    let autoSlideInterval;

    // Función para mostrar la imagen actual
    function showSlide(index) {
        carouselItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    // Función para ir a la siguiente imagen
    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide