var numero_utente = parseInt(prompt('inserisci un numero'));
var scelta_utente = prompt('scegli tra pari o dispari');
var numero_computer = Math.floor(Math.random() * 5);
console.log(numero_utente);
console.log(scelta_utente);
console.log(numero_computer);
var risultato_finale = numero_utente + numero_computer;
console.log(risultato_finale);

function pariodispari(numero) {
    var risultato = 'dispari';
    if (risultato_finale % 2 == 0) {
        risultato = 'pari';
    }
    return risultato;
}

var controllo = pariodispari(risultato_finale)
console.log(controllo);

if (risultato == scelta_utente  ) {
    console.log('hai vinto');
} else {
        console.log('hai perso');

}

function isEven(numero){
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
