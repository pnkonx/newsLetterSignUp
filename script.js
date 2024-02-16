
const submitButton = document.getElementById('emailSubmit');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('errorSubmit');
const successMessageDiv = document.querySelector('.successMessageDiv');
const ghostEmail = successMessageDiv.querySelector('.ghostEmail');

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for the button click
    submitButton.addEventListener('click', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Call the subscribe function
      subscribe();
    });
  });


  function subscribe() {
    // Get the user's input email
    const userEmail = emailInput.value.trim();
    
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if the email is valid
    if (!emailRegex.test(userEmail)) {
      // Add invalid class to email input
    emailInput.classList.add('inputError');
      // Display error message
      errorMessage.style.display = 'flex';
    } else {
      // Hide signUpDiv
      document.querySelector('.signUpDiv').style.display = 'none';
      // Show successMessageDiv
      successMessageDiv.style.display = 'flex';
      // Display the user's email in the success message
      ghostEmail.textContent = userEmail;
      ghostEmail.style.fontWeight = 'bold';
    }
  }