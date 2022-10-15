/* 
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
*/

const userName = prompt("Quale è il tuo nome?")
const userWord = prompt(`Ciao ${userName} inserisci una parola`);

/**
 * Description funzione che prende una stringa e la capovolge per vedere se gli opposti della parola sono uguali 
 * @param {string} userWord
 * @returns {string} reverseWord
 */

function isPalindrome (userWord) {
    //Stringa --> array
    const arrayWord = userWord.split("");
    console.log(arrayWord);
    //Invertiamo lettere array
    const reverseArrayWord = arrayWord.reverse("");
    console.log(reverseArrayWord);
    //Array --> stringa
    const reverseWord = reverseArrayWord.join("");
    console.log(reverseWord);

    //SE gli opposti sono uguali la parola è palindroma
    //ALTRIMENTI la parola non è palindroma
    if (userWord === reverseWord) {
        console.log(`La parola ${userWord} è palindroma`);
    } else {
        console.log(`La parola ${userWord} non è palindroma`);
    }
}
isPalindrome(userWord);
