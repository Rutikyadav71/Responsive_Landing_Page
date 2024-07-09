// script.js

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    var navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#555';
        });

        navLink.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
});
