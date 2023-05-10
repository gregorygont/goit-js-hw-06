const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
  const inputLength = validationInput.value.length;
  const requiredLength = parseInt(validationInput.dataset.length, 10);

  if (inputLength === requiredLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});