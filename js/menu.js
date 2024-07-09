document.addEventListener('DOMContentLoaded', () => {
    const navbarButton = document.querySelector('.navbar_button');
    const navbarLinks = document.querySelector('.navbar_links');
    const navbar = document.querySelector('.navbar');

    function toggleMenu(event) {
        if (event.type === 'touchstart') event.preventDefault();
        navbarLinks.classList.toggle('active');
        navbar.classList.toggle('active');
    }

    navbarButton.addEventListener('click', toggleMenu);
    navbarButton.addEventListener('touchstart', toggleMenu);
});