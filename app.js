const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const togglePassword = document.querySelector('.toggle-password img');

console.log(firstName);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fName = firstName.value;
    const lName = lastName.value;
    const emailVal = email.value;
    const passwordVal = password.value;

    // Check first name
    if (fName === '') {
        firstName.classList.add('error');
    } else {
        firstName.classList.remove('error');
    }
    // Check last name
    if (lName === '') {
        lastName.classList.add('error');
    } else {
        lastName.classList.remove('error');
    }
    // Check email
    if (!validateEmail(emailVal) || emailVal === '') {
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }
    // Check password
    if (passwordVal === '') {
        password.classList.add('error');
    } else {
        password.classList.remove('error');
    }
});

// Validate email
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Toggle password visibility
togglePassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // Toggle the icon
    togglePassword.src = type === 'password' ? 'path/to/eye-icon.png' : 'path/to/eye-off-icon.png';
});
