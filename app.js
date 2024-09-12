const menu = document.querySelector('#mobile-menu')
const menuLnks = document.querySelector('.navbar__menu')

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLnks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);