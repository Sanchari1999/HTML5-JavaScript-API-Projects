// Get DOM elements
const editor = document.querySelector('.editor');

// Add event listener to editor for input and keydown events
editor.addEventListener('input', handleInput);
editor.addEventListener('keydown', handleKeyDown);

// Define input and keydown event handlers
function handleInput() {
  // Get the current content of the editor and store it in local storage
  const content = editor.innerHTML;
  localStorage.setItem('content', content);
}

function handleKeyDown(event) {
  // Check if the user presses the Enter key
  if (event.key === 'Enter') {
    // Prevent the default behavior of adding a new line
    event.preventDefault();

    // Get the current selection and range of the editor
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    // Create a new line element and insert it at the end of the current line
    const newLine = document.createElement('br');
    range.insertNode(newLine);

    // Set the selection to the end of the new line element
    range.setStartAfter(newLine);
    range.setEndAfter(newLine);

    // Collapse the selection to the end of the new line element
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

// Load content from local storage if it exists
const savedContent = localStorage.getItem('content');
if (savedContent) {
  editor.innerHTML = savedContent;
}
