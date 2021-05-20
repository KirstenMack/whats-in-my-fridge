function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;
    fetch('/users/signin', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            name: profile.getName(), 
            email: profile.getEmail(), 
            token: id_token,
        },
        )
    }).then((response) => {
        if(response.status === 200) {
            document.getElementById("success").style.display = "block";
            setTimeout(() => {  
                window.location.href = '/'; 
            }, 3000);
        }        
    }).catch(() => {
            document.getElementById("danger").style.display = "block";
            signOut();    
    });
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    fetch('/users/signout', {method: 'POST'}).then((response) => {
        if(response.status === 200) {
            auth2.signOut().then(() => {
                console.log('User signed out.');
                window.location.href = '/'; 
            });
        }        
    }).catch((response) => {
        if(response.status === 500) {
            console.log('Something went wrong!', response.error);
        }        
    });
}
