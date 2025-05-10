import { isValidEmail } from './emailValidator.js';

document.getElementById('email-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('message');

    if (isValidEmail(email)) {
        messageElement.textContent = 'E-mail válido!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'E-mail inválido!';
        messageElement.style.color = 'red';
    }
});
