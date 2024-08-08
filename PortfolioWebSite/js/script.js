const mobileMenu = document.getElementById('mobile-menu');
const nav = document.querySelector('.nav');
const icon = mobileMenu.querySelector('i');

mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
    icon.classList.toggle('bx-menu');
    icon.classList.toggle('bx-x-circle');
});