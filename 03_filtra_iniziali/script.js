/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function iniziali (stringhe, lettera){
    let newArray =[];

    for(let i=0; i<stringhe.length; i++){
        if(stringhe[i][0]===lettera){
            newArray.push(stringhe[i]);
        }
    }

    return newArray;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(iniziali(names, 'A'))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]