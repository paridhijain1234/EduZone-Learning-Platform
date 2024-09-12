function validateSignUpForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = ''; // Clear previous errors

    if (name === '' || email === '' || username === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'All fields are required!';
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match!';
        return false;
    }

    // Optionally, add more advanced validation rules here (e.g., email format, password strength)

    return true; // Form is valid
}
