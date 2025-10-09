'use strict';

// Query select the document element with ID 'btn-theme' in the constant 'themeToggle'
const themeToggle = document.querySelector('#btn-theme');

// Simplify document selection with constant 'body'
const body = document.querySelector('body');

// Add click event listener to 'themeToggle' that toggles dark mode on the body
themeToggle.addEventListener('click', (e) => {
  body.classList.toggle('darkmode');
});

// Store updated theme preference in local storage
