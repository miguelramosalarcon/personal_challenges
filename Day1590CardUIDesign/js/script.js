const icons = document.querySelectorAll('.fa-circle-xmark');
const openBothButton = document.getElementById('openBoth');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const modal = icon.closest('.modal');
        modal.style.display = 'none';
    });
});

function openBothModals() {
    const modalPromo = document.querySelector('.modal-promo');
    const modalCreate = document.querySelector('.modal-create');
    
    modalPromo.style.display = 'flex';
    modalCreate.style.display = 'flex';
}
openBothButton.addEventListener('click', openBothModals);


