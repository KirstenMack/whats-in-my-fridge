'use-strict'

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



