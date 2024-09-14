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

// Contact section
function initMap() {
    var location = { lat: -26.177618, lng: 28.058249 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Submit form function (optional)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
});


document.querySelectorAll('.read-more').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        alert('Read more about this section');
    });
});


// Footer
document.querySelector('.subscribe-btn').addEventListener('click', function() {
    alert('Subscribe button clicked!');
});
