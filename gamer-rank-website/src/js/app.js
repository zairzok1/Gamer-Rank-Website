document.getElementById('create-account-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Account created successfully!');
});

document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthText = document.getElementById('password-strength');
    if (password.length < 6) {
        strengthText.textContent = 'Weak';
        strengthText.style.color = 'red';
    } else if (password.length < 10) {
        strengthText.textContent = 'Medium';
        strengthText.style.color = 'orange';
    } else {
        strengthText.textContent = 'Strong';
        strengthText.style.color = 'green';
    }
});