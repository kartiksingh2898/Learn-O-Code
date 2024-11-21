



const loginForm = document.querySelector('.login-form');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');


const passwordMessage = document.createElement('p');
passwordMessage.style.fontSize = '0.9em';
passwordMessage.style.marginTop = '5px';
passwordInput.parentNode.appendChild(passwordMessage); 


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


loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    
    if (username === "" || password === "") {
        alert('Please fill out all fields.');
        
        if (username === "") usernameInput.style.borderColor = 'red';
        if (password === "") passwordInput.style.borderColor = 'red';
        return;
    }

    
    usernameInput.style.borderColor = '';
    passwordInput.style.borderColor = '';

    
    console.log('Processing login...');

    
    if (username === "admin" && password === "12345") {
        alert('Login successful!');
        
        window.location.href = "dashboard.html"; 
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
