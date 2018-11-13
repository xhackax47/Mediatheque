// Désactive affichage modal quand l'utilisateur clique en dehors

var modalLogin = document.getElementById('modalLogin');
var modalRegister = document.getElementById('modalRegister');

window.onclick = function (event) {
    // if (event.target == modalLogin) {
    //     modalLogin.style.display = "none";
    // }
    if (event.target == modalRegister) {
        modalRegister.style.display = "none";
    }
}

// let btn = document.querySelector("#btnNote");

// btn.addEventListener("click", function(){
//     let notes = prompt("Entrez vos notes :");

//     let ul = document.querySelector(".notes > ul");
//     let li = document.createElement("li");

//     li.textContent=notes;
//     ul.appendChild(li);
// });

let requestUrl = "http://localhost/Mediatheque/resources/medias";
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'text';
request.send();
request.onload = function () {
    let medias = request.response;
    let listObj = JSON.parse(medias);
    console.log(listObj);
    displayTab(listObj);
}

function displayTab(listObj){
    let divTab = document.querySelector(".tab");
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let td = document.createElement("td");

    tr.appendChild(th);
    tr.appendChild(td);
    table.appendChild(tr);
    divTab.appendChild(table);
}