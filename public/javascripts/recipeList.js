'use-strict'

const list = document.getElementById('recipeList');

function fetchId (id) {
    const button = document.getElementById('detsButton-'+id);
    const value = button.value;
    console.log('Show details button clicked')
    fetch('search/details/'+value, {method: 'GET'})
        .then(function(response){
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed');
        })
        .then(function (data){
            console.log('Click recorded with element id ' + value);
            console.log('Description: ' + data.desc);
            console.log('Description: ' + data);
            document.getElementById('details-'+id).innerHTML = data.desc;
        })
        .catch(function(error){
            console.log(error);
        })
}



