/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function iniziali (nomi){
    let newArray =[];

    for(let i=0; i<nomi.length; i++){
        newArray.push(nomi[i][0]); //.push aggiunge i valori dentro newArray... prende l’elemento i dell’array, poi la posizione 0 di qell’elemento
    }

    return newArray;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(iniziali(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]