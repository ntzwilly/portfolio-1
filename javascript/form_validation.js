const contactForm = document.getElementById('form');
const email = document.getElementById('email');
const alertMessage = document.createElement('span');
alertMessage.className = 'alert';
alertMessage.textContent = 'Email can only be in lowercase';
contactForm.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    e.preventDefault();
    email.parentNode.insertBefore(alertMessage, email.nextSibling);
  }
});
