// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

// array vuoto
var numeri = [];
// chiedere per 6 volte all’utente di inserire il numero e se è dispari 
for ( var i = 0; i < 6; i++ ) {
   var numeroscelto = parseInt(prompt("Inserisci un numero"));
   if (numeroscelto % 2 == 0) {

   } else {
       numeri.push(numeroscelto);
   }
}
// mostrare l'array
console.log(numeri)