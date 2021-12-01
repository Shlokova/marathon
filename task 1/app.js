const slides = document.querySelectorAll('.slide');

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        removeActiveClass();
        slide.classList.add('active');
    });
});

function removeActiveClass() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}
