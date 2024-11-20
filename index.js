// Sliding Images Logic
const images = document.querySelectorAll('.photo-container img');
let currentIndex = 0;

// Function to show the next image
function showNextImage() {
    // Hide current image
    images[currentIndex].style.opacity = 0;

    // Update index
    currentIndex = (currentIndex + 1) % images.length;

    // Show next image
    images[currentIndex].style.opacity = 1;
}

// Set interval for automatic sliding
setInterval(showNextImage, 3000); // Change every 3 seconds


// DOM Elements
const searchInput = document.querySelector('.search-container input');
const searchButton = document.querySelector('.search-container .button');
const emailInput = document.getElementById('email');
const subscribeButton = document.querySelector('.email-container .button');

// Add search functionality
searchButton.addEventListener('click', function () {
    const query = searchInput.value.trim();
    if (query === "") {
        alert('Please enter a search term.');
        searchInput.style.borderColor = 'red';
    } else {
        searchInput.style.borderColor = ''; // Reset border color
        alert(`Searching for: ${query}`);
        // Redirect or perform search functionality (modify this as needed)
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
});

// Validate subscription email
subscribeButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link action
    const email = emailInput.value.trim();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        emailInput.style.borderColor = 'red';
    } else {
        emailInput.style.borderColor = ''; // Reset border color
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = ""; // Clear the input field
    }
});

// Add smooth scrolling for internal links (if necessary)
document.querySelectorAll('a').forEach(anchor => {
    if (anchor.getAttribute('href').startsWith('#')) {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// Highlight navigation links on hover
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.style.color = '#007bff';
    });
    link.addEventListener('mouseleave', function () {
        this.style.color = ''; // Reset to default
    });
});

// Notification button alert
const notificationButton = document.querySelector('a[href="Notification.html"]');
notificationButton.addEventListener('click', function (event) {
    event.preventDefault();
    alert('No new notifications.');
});
