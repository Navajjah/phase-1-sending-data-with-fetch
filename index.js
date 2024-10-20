// Add your code here
function submitData(name, email) {
    // Create an object with the name and email
    const userData = {
      name: name,
      email: email,
    };
  
    // Send the POST request using fetch
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userData),
    })
      
      .then((response) => response.json())
      
      .then((data) => {
        
        const body = document.querySelector('body');
        const newIdElement = document.createElement('p');
        newIdElement.textContent = `New user ID: ${data.id}`;
        body.appendChild(newIdElement);
      })
      
      .catch((error) => {
        const body = document.querySelector('body');
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        body.appendChild(errorElement);
      });
  }
  
