const ellipsisIcons = document.querySelectorAll(".ellipsis-icon");
const menus = document.querySelectorAll(".menu");

// Agregar evento de clic a cada ícono de ellipsis
ellipsisIcons.forEach((ellipsisIcon, index) => {
    ellipsisIcon.addEventListener("click", function() {
        // Verificar la opacidad del menú correspondiente y cambiarla
        if (menus[index].style.opacity === "1") {
            menus[index].style.opacity = "0";
        } else {
            menus[index].style.opacity = "1";
        }
    });
});
