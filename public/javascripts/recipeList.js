'use-strict'

const searchButton = document.getElementById('searchBtn');

searchButton.addEventListener('click', () => {
    fetch('search/', {method: 'POST'})
        .then(function (response) {
            if (response.status === 200) {
                return
            }
            throw new Error('Request failed');
        })
        .catch((error) => {
            document.getElementById("searchError").style.display = "block";
            console.log(error);
        })
})

function fetchId (id) {
    const button = document.getElementById('detsButton-'+id);
    const value = button.value;
    fetch('search/details/'+value, {method: 'GET'})
        .then(function(response){
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed');
        })
        .then(function (data){
            document.getElementById('details-'+id).innerHTML = data.desc;
        })
        .catch(function(error){
            console.log(error);
        })
}



