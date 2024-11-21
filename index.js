
const images = document.querySelectorAll('.photo-container img');
let currentIndex = 0;


function showNextImage() {
    
    images[currentIndex].style.opacity = 0;

    
    currentIndex = (currentIndex + 1) % images.length;

    
    images[currentIndex].style.opacity = 1;
}


setInterval(showNextImage, 3000); 



const searchInput = document.querySelector('.search-container input');
const searchButton = document.querySelector('.search-container .button');
const emailInput = document.getElementById('email');
const subscribeButton = document.querySelector('.email-container .button');


searchButton.addEventListener('click', function () {
    const query = searchInput.value.trim();
    if (query === "") {
        alert('Please enter a search term.');
        searchInput.style.borderColor = 'red';
    } else {
        searchInput.style.borderColor = ''; 
        alert(`Searching for: ${query}`);
        
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
});


subscribeButton.addEventListener('click', function (event) {
    event.preventDefault(); 
    const email = emailInput.value.trim();

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        emailInput.style.borderColor = 'red';
    } else {
        emailInput.style.borderColor = ''; 
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = ""; 
    }
});


document.querySelectorAll('a').forEach(anchor => {
    if (anchor.getAttribute('href').startsWith('#')) {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    }
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.style.color = '#007bff';
    });
    link.addEventListener('mouseleave', function () {
        this.style.color = ''; 
    });
});


const notificationButton = document.querySelector('a[href="Notification.html"]');
notificationButton.addEventListener('click', function (event) {
    event.preventDefault();
    alert('No new notifications.');
});
