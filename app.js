const menu = document.querySelector('#mobile-menu')
const menuLnks = document.querySelector('.navbar__menu')

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLnks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');

        const allItems = document.querySelectorAll('.faq-item');
        allItems.forEach(otherItem => {
            if (otherItem !== parent) {
                otherItem.classList.remove('active');
            }
        });
    });
});