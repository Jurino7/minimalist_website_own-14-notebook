
function login() {
    var name = document.getElementById('user_name');
    var password = document.getElementById('user_passwd');

    if ( name.value == 'admin' && password.value == 'admin123') {
        console.log('access to server');
        window.location.href = 'minimalist_website_logged.html';
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key == 'Enter'){
        login()
    }
})