function showLoader() {
  // Get the loader element
  const loader = document.querySelector('.loader');

  // Add the 'loading' class to the loader element to make it visible
  loader.classList.add('loading');

  // Disable the button to prevent multiple clicks
  const button = document.getElementById('contact-button');
  button.disabled = true;

  // Wait for 4 seconds (4000 milliseconds)
  setTimeout(() => {
    // Remove the 'loading' class to hide the loader element
    loader.classList.remove('loading');

    // Enable the button
    button.disabled = false;

    // Redirect the user to the contact form
    window.location.href = 'contact.html';
  }, 4000);
}

// Add a click event listener to the button that triggers the loader function
const button = document.getElementById('contact-button');
button.addEventListener('click', showLoader);
