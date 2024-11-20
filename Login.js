


// Select form elements
const loginForm = document.querySelector('.login-form');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');

// Create a password strength message element
const passwordMessage = document.createElement('p');
passwordMessage.style.fontSize = '0.9em';
passwordMessage.style.marginTop = '5px';
passwordInput.parentNode.appendChild(passwordMessage); // Add below the password field

// Add real-time feedback for password strength
passwordInput.addEventListener('input', function () {
    const password = passwordInput.value;

    if (password.length === 0) {
        passwordMessage.textContent = '';
    } else if (password.length < 6) {
        passwordMessage.textContent = 'Password is too weak!';
        passwordMessage.style.color = 'red';
    } else if (password.length < 10) {
        passwordMessage.textContent = 'Password strength: Medium';
        passwordMessage.style.color = 'orange';
    } else {
        passwordMessage.textContent = 'Password strength: Strong';
        passwordMessage.style.color = 'green';
    }
});

// Add event listener for form submission
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate username and password
    if (username === "" || password === "") {
        alert('Please fill out all fields.');
        // Highlight missing fields
        if (username === "") usernameInput.style.borderColor = 'red';
        if (password === "") passwordInput.style.borderColor = 'red';
        return;
    }

    // Reset border colors if fields are filled
    usernameInput.style.borderColor = '';
    passwordInput.style.borderColor = '';

    // Simulate form processing (e.g., authenticating)
    console.log('Processing login...');

    // Simulated authentication (replace this with your actual backend integration)
    if (username === "admin" && password === "12345") {
        alert('Login successful!');
        // Redirect to another page (if required)
        window.location.href = "dashboard.html"; // Change to your desired page
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
