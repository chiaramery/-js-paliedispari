/* 
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto
*/

const userName = prompt("Quale è il tuo nome?");
const userEvenOdd = prompt("Scegli tra pari o dispari");
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
const computerNumber = rndNumber (1, 5);
å
console.log(userName, userEvenOdd, userNumber);

// Definire chi ha vinto
const resultMessage = whoIsTheWinner(userNumber, computerNumber);
console.log(resultMessage);

//FUNZIONI
/**
 * Description random number per computer
 * @param {number} min
 * @param {number} max
 * @returns {number} numberGenereted
 */

 function rndNumber(min, max) {
    const numberGenereted = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numberGenereted;
}

//Somma numeri
const sum = userNumber + computerNumber;
console.log(userNumber, computerNumber, sum);


/**
 * Description
 * @param {number} sum
 * @returns {string} message
 */

function whoIsTheWinner (sum) {

    let message = "";
    if(sum % 2 == 0 && userEvenOdd === "dispari")  {
        message = `Grande ${userName} hai vinto!`;
    } else if (sum % 2 != 0 && userEvenOdd === "pari"){
        message = `Grande ${userName} hai vinto!`;
    } else {
        message = `Mi dispiace ${userName} hai perso, ha vinto il computer. Ritenta sarai più fortunato`;
    }

    return message;
}
