/* Variables let */

let chaine = "Test1";
let chaine2 = "Lorem/ipsum/VENI/vidi/VICI";
let number = 666;
let boolean = true;
let symbol = Symbol(666666);
let nul = null;
let undefine = undefined;

let number1 = "10";
let number2 = "20";
let nombre = 654321;



/* Fonctions */

function ex1() {
    console.log(typeof string);
    console.log(typeof number);
    console.log(typeof boolean);
    console.log(typeof symbol);
    console.log(typeof nul);
    console.log(typeof undefine);
}

function ex2(chaine) {
    console.log(
        chaine[0] + chaine[chaine.length - 1]
    );
}

function ex3(number1, number2) {
    var integer1 = parseInt(number1, 10);
    var integer2 = parseInt(number2, 10);

    console.log(
        integer1 + integer2
    );
}

function ex4(chaine2) {
    let chaineFinal = "";
    let wordList = chaine2.split("/");

    for (let i=0; i<wordList.length; i++ ) {
        if(i%2 == 0){
            chaineFinal = chaineFinal + wordList[i].toUpperCase();
        }
        else{
            chaineFinal = chaineFinal + wordList[i];
        }
    }
    console.log(
        chaineFinal
    );
}

function ex5() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    let hr = today.getHours();
    let mn = today.getMinutes();
    let amPM = (hr > 11) ? "PM" : "AM";
    let dateAndHour = "On est le " + dd + "/" + mm + "/" + yyyy + " et il est " + hr + ":" + mn + " " + amPM;

    if(hr > 12) {
        hr -= 12;
      } else if(hr == 0) {
        hr = "12";
      }
      if(mn < 10) {
        mn = "0" + mn;
      }
    console.log(
        dateAndHour
    )
}

function ex6(nombre){
    console.log(nombre.toString().split('').reverse().join())
}

function ex7(){

}

/* Appel Fonctions */

ex1();
ex2(chaine);
ex3(number1, number2);
ex4(chaine2);
ex5();
ex6(nombre);
ex7();