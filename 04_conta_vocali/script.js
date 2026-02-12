/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numeroVocali (stringa){

    let nVoc=0;

    for(let i=0; i<stringa.length; i++){
        if (stringa[i] === 'a' || stringa[i] === 'e' || stringa[i] === 'i' || stringa[i] === 'o' || stringa[i] === 'u'){
            nVoc+=1
        }
    }

    return nVoc;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(numeroVocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)

const numeroVocali=(stringa)=> stringa.split('').filter(vocali => 'a e i o u'.includes(vocali)).length; // .split trasforma la parola in array di lettere / .lenght conta quante vocali ci sono
console.log(numeroVocali(word));