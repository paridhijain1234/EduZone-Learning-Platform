
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = ''; // Clear previous errors

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields';
        return false;
    }

    // Optionally, add further validation rules here

    return true; // Form is valid
}
