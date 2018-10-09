// Fermer la modal quand l'utilisateur clique en dehors

var modal = document.getElementById('modalLogin');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}