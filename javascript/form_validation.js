const contactForm = document.getElementById('form');
const email = document.getElementById('email');
const alertMessage = document.getElementById('span');
const submitButton = document.getElementById('submit');

contactForm.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    e.preventDefault();
    alertMessage.textContent = 'Email can only be in lowercase';
    submitButton.style.borderColor = 'red';
  }
});
