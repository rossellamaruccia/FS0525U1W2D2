/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const randomNumbers = [2, 5564, 7452351, 6797573, 43217]
let maxNumber = Math.max(...randomNumbers)
  console.log(maxNumber)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const x = 5
let n = undefined
//n = 5
if (n === x) {
} else {
  console.log("not equal")
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let numeroFornito = 35
// numeroFornito = 26 per verificare condizione con valore false
if (numeroFornito % 5 > 0){
  console.log("non divisibile")
}
else {
  console.log("divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let comeSiFa = [5, 3]
// comeSiFa.shift()
// comeSiFa.unshift(8) righe 40 e 41 per verificare la prima condizione
//comeSiFa.splice(0,1,8) per verificare la seconda condizione
//comeSiFa.splice(0,1,2) per verificare else
if (comeSiFa[0] === 8) {
  console.log("bene")
} else if (comeSiFa[1] === 8) {
  console.log("bene")
} else if (comeSiFa[0] + comeSiFa[1] === 8) {
  console.log("bene")
} else {
  console.log("male")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart
totalShoppingCart = 20
let totalCost = totalShoppingCart + 10
if (totalShoppingCart > 50) {
  console.log("free shipping applied")
} else {
  //console.log("Shipping fee = 10")
  console.log("Shipping fee applied, total cost is: ", totalCost)
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
//totalShoppingCart = 356 per verificare la prima condizione
if (totalShoppingCart * 20 / 100 > 50) {
  console.log("free shipping applied")
} else {
  //console.log("Shipping fee = 10")
  console.log("Shipping fee applied, total cost is: ", totalCost)
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let insiemeDiNumeri = {
  n1:324,
  n2:543,
  n3:780
}

// insiemeDiNumeri.sort(function(a, b){return a - b} )
// console.log("array in ordine decrescente: ", insiemeDiNumeri.reverse())


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log(typeof insiemeDiNumeri)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let pariDispari = 67
if (pariDispari % 2 > 0) {
  console.log("dispari")
} else {
  console.log("pari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto'
}

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2]

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let newArray = []
newArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(newArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

newArray.splice(8, 1, "100")
console.log(newArray)