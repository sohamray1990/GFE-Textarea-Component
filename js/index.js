const descriptionField1 = document.querySelector('#description-field1');
const maxChars = 500;

descriptionField1.addEventListener('input', (event) => {
  const count = event.target.value.length;
  const countElement = document.querySelector('#description-field-count1');
  const countParentElement = countElement.parentElement;

    // If the user enters more than 500 characters, show error and truncate the input value
  if (count > maxChars) {
    countParentElement.classList.add('error');
    descriptionField1.classList.add('error');
    event.target.value = event.target.value.substring(0, maxChars);
  } else {
    countParentElement.classList.remove('error');
    descriptionField1.classList.remove('error');
  }

  // Update the character count after handling truncation
  countElement.textContent = event.target.value.length;
});
