const dataContainer = document.getElementById('data-container');

// Fetch data from server using Promises
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    // Create a list of user names
    const users = data.map(user => user.name);

    // Display the list of user names on the page
    users.forEach(userName => {
      const dataItem = document.createElement('div');
      dataItem.classList.add('data-item');
      dataItem.textContent = userName;
      dataContainer.appendChild(dataItem);
    });
  })
  .catch(error => console.error(error));
