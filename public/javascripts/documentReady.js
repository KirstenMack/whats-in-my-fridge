'use-strict'


document.addEventListener("DOMContentLoaded", function(event) { 
    fetch('ingredients/fectchAll', {method: 'GET'})
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed');
        })
        .catch((error) => {
            console.log(error);
        });
  });