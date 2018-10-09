// Fermer les modales quand l'utilisateur clique en dehors

var modalLogin = document.getElementById('modalLogin');
var modalRegister = document.getElementById('modalRegister');

window.onclick = function(event) {
    if (event.target == modalLogin) {
        modalLogin.style.display = "none";
    }
    else if (event.target == modalRegister) {
        modalRegister.style.display = "none";
    }
}