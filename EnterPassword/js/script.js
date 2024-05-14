document.addEventListener("DOMContentLoaded", function() {
    const eyeIcon = document.querySelector('.fa-eye-slash');
    const passwordInput = document.querySelector('.input-password');

    eyeIcon.addEventListener('click', function() {
        if (eyeIcon.classList.contains('fa-eye-slash')) {
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
            passwordInput.type = 'text';
        } else {
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
            passwordInput.type = 'password';
        }
    });
});
