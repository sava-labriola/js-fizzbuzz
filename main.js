//Scrivi un programma che stampi i numeri da 1 a 100
//Al posto dei multipli di 3 stampa Fizz
//Al posto dei multipli di 5 stampa Buzz
//Al posto dei multipli di 3 stampa FizzBuzz

//insieme di numeri vuoto
var numeri = [];
//dimensione dell'insieme
var lunghezzaArray = 100;
//valore da assegnare a ogni posizione dell array
var contatore = 0;
//variabili per il resto
var fizz;
var buzz;

for (var i = 0; i < lunghezzaArray; i++) {
//contatore per riempire le posizioni progressivamente
    contatore++;
//calcolo del resto per ogni valore dell array
    fizz = contatore % 3;
    buzz = contatore % 5;
//controllo se il valore è sia multiplo di 3 che di 5
    if (fizz == 0 && buzz == 0) {
        numeri[i] = 'FizzBuzz';
    }
//controllo se il valore è solo multiplo di 3
    else if (fizz == 0) {
        numeri[i] = 'Fizz';
    }
//controllo se il valore è solo multiplo di 5
    else if (buzz == 0) {
        numeri[i] = 'Buzz';
    }
//il numero dell' array non è multiplo di 3 e 5
    else {
        numeri[i] = contatore;
    }
//stampo i valori dell array
    console.log(numeri[i]);
}
