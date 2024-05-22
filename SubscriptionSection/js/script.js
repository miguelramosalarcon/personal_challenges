document.addEventListener('DOMContentLoaded', () => {
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');
    const carousel = document.querySelector('.carousel');

    let scrollAmount = 0;

    function updateScrollStep() {
        if (window.innerWidth <= 380) {
            // Para pantallas móviles, desplazarse completamente una tarjeta
            return carousel.querySelector('.card').offsetWidth + 60; // Ajuste para el margen
        } else {
            // Para pantallas más grandes, desplazarse por la cantidad de columnas visibles
            return carousel.offsetWidth / 3;
        }
    }

    let scrollStep = updateScrollStep();

    rightButton.addEventListener('click', () => {
        if (scrollAmount < carousel.scrollWidth - carousel.offsetWidth) {
            scrollAmount += scrollStep;
            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });

    leftButton.addEventListener('click', () => {
        if (scrollAmount > 0) {
            scrollAmount -= scrollStep;
            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });

    // Actualizar scrollStep cuando cambia el tamaño de la ventana
    window.addEventListener('resize', () => {
        scrollStep = updateScrollStep();
    });
});
