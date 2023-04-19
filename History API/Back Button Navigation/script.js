// Get DOM elements
const pageContent = document.querySelector('.page-content');
const page2 = document.getElementById('page-2');
const goToPage2Btn = document.getElementById('go-to-page-2');

// Add event listener to button
goToPage2Btn.addEventListener('click', () => {
  // Hide the first page content
  pageContent.classList.add('hidden');

  // Show the second page content
  page2.classList.remove('hidden');

  // Push a new state to the history stack with the new URL
  history.pushState({ page: 2 }, 'Page 2', 'page-2');
});

// Add event listener to the window object for the popstate event
window.addEventListener('popstate', event => {
  if (event.state && event.state.page === 2) {
    // Show the second page content
    page2.classList.remove('hidden');

    // Hide the first page content
    pageContent.classList.add('hidden');
  } else {
    // Show the first page content
    pageContent.classList.remove('hidden');

    // Hide the second page content
    page2.classList.add('hidden');
  }
});
