var attempt = 3; // Nombre de tentatives max

function validate() {
    var username = document.getElementById("userName").value;
    var password = document.getElementById("passWord").value;
    if (username == "user" && password == "pass") {
        alert("Connexion réussie");
        window.location = "../../biblio/success.html"; // Redirection vers page de succès de connexion
        return false;
    } else {
        attempt--; // Décremente une tentative
        alert("Il vous reste " + attempt + " tentatives;");
        // Désactiver les champs après 3 tentatives
        if (attempt == 0) {
            document.getElementById("userName").disabled = true;
            document.getElementById("passWord").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}