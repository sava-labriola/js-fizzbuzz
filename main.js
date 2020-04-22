var numeri = [];
var lunghezzaArray = 100;
var contatore = 0;
var fizz;
var buzz;

for (var i = 0; i < lunghezzaArray; i++) {
    contatore++;
    fizz = contatore % 3;
    buzz = contatore % 5;
    if (fizz == 0 && buzz == 0) {
        numeri[i] = 'FizzBuzz';
    }
    else if (fizz == 0) {
        numeri[i] = 'Fizz';
    }
    else if (buzz == 0) {
        numeri[i] = 'Buzz';
    }
    else {
        numeri[i] = contatore;
    }
    console.log(numeri[i]);
}
