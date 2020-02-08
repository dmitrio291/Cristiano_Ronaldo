document.addEventListener('DOMContentLoaded', () => {

    const nav = document.getElementById('nav'),
        toggle = document.getElementById('toggle');

    const menuToggle = () => {       
        nav.classList.toggle('nav--active');
        toggle.classList.toggle('toggle--active');
    }

    toggle.addEventListener('click', menuToggle);

});