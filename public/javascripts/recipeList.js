'use-strict'

function fetchId (id) {
    const button = document.getElementById('detsButton-'+id);
    const value = button.value;
    button.setAttribute("hidden", true)
    fetch('search/details/'+value, {method: 'GET'})
        .then(function(response){
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed');
        })
        .then(function (data){
            document.getElementById('details-'+id).innerHTML = data.desc;
            document.getElementById('url-'+id).style.display = 'block';
            document.getElementById('url-'+id).setAttribute('href', data.url);
        })
        .catch(function(error){
            console.log(error);
        })
}



