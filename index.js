document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.sign-up-form');
  const successContainer = document.querySelector('.success-container');
  const formContainer = document.querySelector('.container');
  const errorMessage = document.querySelector('.error-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const submittedEmail = document.querySelector('.submitted-email');

    if (form.checkValidity() && email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
      formContainer.style.display = 'none';
      successContainer.classList.remove('hidden');
      errorMessage.style.display = 'none';
      submittedEmail.textContent = email;
    } else {
      errorMessage.style.display = 'block';
    }
  });

  function dismissMessage() {
    successContainer.classList.add('hidden');
    formContainer.style.display = 'flex'; 
    form.reset();
  }

  const dismissButton = document.querySelector('.dismiss-btn');
  dismissButton.addEventListener('click', dismissMessage);
});
