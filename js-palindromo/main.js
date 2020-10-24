//scrivere una funzione per valutare se una parola è palindroma oppure no
//una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa
//ad esempio "anna" è palindroma, "andrea"
var nome_inserito = prompt('inserisci il tuo nome');
console.log(nome_inserito)
var array_nome = nome_inserito.split("");
console.log(array_nome);
var reverse_array = array_nome.reverse();
console.log(reverse_array);
var joinArray = reverse_array.join("");
console.log(joinArray)

if (nome_inserito == joinArray) {
    console.log('la parola è palindroma');
}
else {
    console.log('la parola non è palindroma');
}
