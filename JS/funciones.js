document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');
    var body = document.querySelector('body');
    var navbarHeight = navbar.offsetHeight;

    window.addEventListener('scroll', function () {
        if (window.scrollY > navbarHeight) {
            navbar.classList.add('fixed-top');
            body.style.paddingTop = navbarHeight + 'px';
        } else {
            navbar.classList.remove('fixed-top');
            body.style.paddingTop = '0';
        }

        document.getElementById('correoe').addEventListener('click', function () {
            window.location.href = 'mailto:erik.alj_ram@hotmail.com';
        });
    });
});

document.getElementById('correo').addEventListener('click', function () {
    window.location.href = 'mailto:luis.fel_bs@outlook.com';
});