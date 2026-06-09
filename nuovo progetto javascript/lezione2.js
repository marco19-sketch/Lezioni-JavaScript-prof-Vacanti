// /* ES N1 dato l'array
// let numeri = [10, 20, 30, 40, 50];
// 1. stampare tutti i numeri
// 2. stampare i numeri maggiori di 35
// 3. stampare i numeri triplicati*/

// let numeri = [10, 20, 30, 40, 50];

// numeri.forEach(n => console.log(n)); /*output: 10, 20, 30, 40, 50*/

// /* dichiarazione dell'indice; consizione di uscita dal ciclo; incremento dell'indice*/
// for (let i = 0; i < numeri.length; i++) {
//     if (numeri[i] > 35) {
//         console.log(numeri[i]); /*output: 40, 50*/
//     }
//     else {
//         console.log("Il numero " + numeri[i] + " è minore o uguale a 35"); /*output: "Il numero ? è minore o uguale a 35*/
//     }
//     console.log(numeri[i]);
// } 

// /*triplicatore*/
// for (let i in numeri) {
//     console.log(numeri[i] * 3);
// } /*output: 30, 60, 90, 120, 150*/

// for (let n of numeri) {  /* n è una variabile che assume il valore di ogni elemento dell'array numeri */
//     console.log(n);
// } /*output: 10, 20, 30, 40, 50*/


// //function(n) { /*equivalente all'arrow fuction*/
// //    console.log(n);
// //}; /*output: 10, 20, 30, 40, 50*/


// /* ES N2 dato l'array di oggetti
// let utenti = [
//     { nome: "Mario", età: 30},
//     { nome: "Luigi", età: 20},
//     { nome: "Anna", età: 40},
// ];
// 1. stampare tutti i nomi
// 2. stampare i nomi degli utenti maggiori di 25 anni
// 3. crea un nuovo arrey con solo i  nomi degli utenti che hanno più di 25 anni*/

// let utenti = [
//     { nome: "Mario", età: 30},
//     { nome: "Luigi", età: 20},
//     { nome: "Anna", età: 40},
// ];

// utenti.forEach(utente => {console.log(utente.nome);});

// function utente25(utenti) {
//     for (let i = 0; i < utenti.length; i++) {
//         if (utenti[i].età > 25) {
//             console.log(utenti[i].nome); /*output: "Mario", "Anna"*/
//         }
//         else {
//           console.log("l'utente " + utenti[i].nome + " ha meno di 25 anni"); /*output: "l'utente Luigi ha meno di 25 anni"*/
//         };
//     } 
// };
// utente25(utenti); /*output: "Mario", "Anna"*/


// function narray25 (utenti) {
//     let nuovoarray25 = []
//     for (let i = 0; i < utenti.length; i++) {
//         if (utenti[i].età > 25) {
//             nuovoarray25.push(utenti[i].nome);
//         }
//     };
// };
// narray25(utenti); /*output: ["Mario", "Anna"]*/

// let nuovoarray25 = []
// console.log(utenti.filter(utente => utente.età > 25).map(utente => utente.nome)) /*output: ["Mario", "Anna"]*/

// /* ES N3 data la matrice
// const voti = [
//                 [6, 7, 8],
//                 [5, 6, 7],
//                 [9, 8, 10]
//             ];
// 1. stampare tutti i voti maggiori di 6
// 2. crea una nuova matrice con i voti maggiori del 15% */

// const voti = [
//                 [6, 7, 8],
//                 [5, 6, 7],
//                 [9, 8, 10]
//             ];

// function maggioridiP(voti, parametro) { 
//     let riga = []
//     let colonna = []
//     for (let n = 0; n < voti.length; n++)
//         for (let i = 0; i < voti[n].length; i++)
//             if (voti[n][i] > parametro){
//                 colonna.push(voti[n][i]);
//                 riga.push(colonna);
//                 console.log(riga);
//                 colonna = [];
//                 console.log(voti[n][i])
//             }
// };
// maggioridiP(voti, 6); /*output: 7, 8, 7, 9, 8, 10*/

// let nuovamatrice = []
// console.log(voti.map(riga => riga.filter(voto => voto > 6))) /*output: [[7, 8], [7], [9, 8, 10]]*/
// console.log(voti.map(riga => riga.filter(voto => voto > 6).map(voto => voto * 1.15))) /*output: [[8.05, 9.2], [8.05], [10.35, 9.2, 11.5]]*/

// /* ES 4 dato un array di numeri 
// const numeriA = [1, 102, 33, 46, 75, 88, 128];
// stampa i numeri pari
// contare quanti sono i numeri maggiori di 10
// */

//const numeriA = [1, 102, 33, 46, 75, 88, 128];

// function numeripari (num) {
//     // for (i = 0; i < num.length; i++) {
//     //     if (num[i] % 2 === 0) {
//     //         console.log(num[i])
//     //     }
//     // }
//     for (let n of num) { // n è una variabile che assume il valore di ogni elemento dell'array num
//         if (n % 2 === 0) {
//             console.log(n);
//         }
//     }
// }
// numeripari(numeriA) /*output: 102, 46, 88, 128*/

// numeriA.forEach(n => {if (n % 2 === 0) console.log(n);}); /*output: 102, 46, 88, 128*/

// const numeriA = [1, 102, 33, 46, 75, 88, 128];

// function contanumeri (num) {
//     let contatore = 0
//     for (let i = 0; i < num.length; i++) {
//         console.log(num[i]); /*output: 1, 102, 33, 46, 75, 88, 128*/
//         if (num[i] > 10) {
//             contatore_t = contatore + 1;
//             console.log(num[i]); /*output: 102, 33, 46, 75, 88, 128*/
//         }
//     }
//     return contatore_t;
// }
// contanumeri(numeriA) /*output: 6*/

// console.log(numeriA.filter(n => n > 10).length); /*output: 6*/


/* ES 5 dato un array di stringhe
const nomi = ["Caligola", "Vespasiano", "Cesare", "Tarquinio", "Severo", "Nerone"];
stampa solo i nomi con lunghezza maggiore di 4
stampa i nomi in maiuscolo */

// const nomi = ["Caligola", "Vespasiano", "Cesare", "Tarquinio", "Severo", "Nerone"];

// function nomisopra4lettere(nome){
//     for (let i = 0; i < nomi.length; i++){
//         if (nome[i].length > 7){
//             console.log(nome[i].toUpperCase()); /*output: "CALIGOLA", "VESPASIANO", "TARQUINIO", "SEVERO", "NERONE"*/
//         }
//     }
// }
// nomisopra4lettere(nomi) /*output: "Caligola", "Vespasiano", "Tarquinio", "Severo", "Nerone"*/

//nomi.forEach(n => {if (n.length > 4) console.log(n);}); /*output: "Caligola", "Vespasiano", "Tarquinio", "Severo", "Nerone"*/

/* ES 6 dato un array di oggetti
const prodotti = [
    { nome: "Laptop", prezzo: 999 },
    { nome: "Smartphone", prezzo: 499 },
    { nome: "Tablet", prezzo: 299 },
    { nome: "Monitor", prezzo: 199 },
    { nome: "Tastiera", prezzo: 49 }
];
stampa i nomi dei prodotti con prezzo maggiore di 300
contiamo quanti prodotti hanno un prezzo minore di 199 */

// const prodotti = [
//     { nome: "Laptop", prezzo: 999 },
//     { nome: "Smartphone", prezzo: 499 },
//     { nome: "Tablet", prezzo: 299 },
//     { nome: "Monitor", prezzo: 199 },
//     { nome: "Tastiera", prezzo: 49 }
// ];

// function stampaSopra300(prodotti,num){
//     for (let i=0; i < prodotti.length; i++){
//         if( num < prodotti[i].prezzo){
//             console.log(prodotti[i].nome) /*output: "Laptop", "Smartphone"*/
//         }
//     }
// }
// stampaSopra300(prodotti,300) /*output: "Laptop", "Smartphone"*/

// console.log(prodotti.filter(p => p.prezzo > 300).map(p => p.nome)); /*output: ["Laptop", "Smartphone"]*/

// function contatoreSopra199(prodotti,num){
//     contatore = 0
//     for (let i=0; i < prodotti.length; i++){
//         if( num < prodotti[i].prezzo){
//            contatore += 1
//         }
//     }
//     return console.log(contatore)
// }
// contatoreSopra199(prodotti,199) /*output: 3*/

// console.log(prodotti.filter(p => p.prezzo < 199).length); /*output: 3*/

/* ES 7 dato un array di numeri con duplicati
const listaduplicati = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9];
trova i duplicati 
conta i duplicati */

// let listaduplicati = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 8, 9];

// function contaduplicati(lista) {
//     let contatore = 0
//     let duplicati = []
//     let oggetto = {}
//     for( let i = 0; i < lista.length; i++){
//         for (let j = i + 1; j < lista.length; j++){
//              if (lista[i] === lista[j]){
//                 contatore++
//                 duplicati.push(lista[i])
//                 /*console.log(lista[i]) /*output: 5, 8*/
//                 if(duplicati.includes(lista[i])){
//                     oggetto[lista[i]] = contatore /*output: {5: 2, 8: 3} */    
//                 }
//             }
//         }
//     }
//     console.log(oggetto) /*output: {5: 2, 8: 3} */

// }
// contaduplicati(listaduplicati)


// function contaduplicati(lista) {
//     let contatore = 0
//     let duplicati = []
//     let oggetto = {}
//     for( let i in lista){
//         for (let j = i + 1; j < lista.length; j++){ {
//              if (lista[i] === lista[j]){
//                 contatore++
//                 duplicati.push(lista[i])
//                 console.log(lista[i]) /*output: 5, 8*/
//                 if(duplicati.includes(lista[i])){
//                     oggetto[lista[i]] = contatore /*output: {5: 2, 8: 3} */
//                     console.log(oggetto)    
//                 }
//             }
//         }
//     }

// }};
// contaduplicati(listaduplicati)

// const listaduplicati = ["caramelle", "panelle", "pizza", "pizza", "pollo", "lasagne", "salmone", "patatine", "lasagne", "pasta", "pasta", "pollo"];

// let conteggio = {};

// for (let l of listaduplicati){
//     if (conteggio[l]){
//         conteggio[l]++;
//     } else{
//         conteggio[l] = 1;
//     }
// }
// let array_conteggio = [];

// for(let k in conteggio){
//     //et passaggio = []
//     //passaggio.push(k, conteggio[k]);
//     array_conteggio.push([k, conteggio[k]])
// }

// array_conteggio.sort((a,b) => b[1] - a[1] )

// console.log(array_conteggio);


//const valori = ["pollo", "pollo", "pizza", "dolci", "pollo", "dolci","frutta"];

// const valori = ["caramelle", "panelle", "pizza", "pizza", "pizza", "pizza", "pollo", "lasagne", "salmone", "patatine", "lasagne", "pasta", "pasta", "pollo"];

// let conteggio = {};

// for (let v of valori) {
//   if (conteggio[v]) {
//     conteggio[v]++;
//   } else {
//     conteggio[v] = 1;
//   }
// }

// // trasformazione manuale
// let array = [];

// for (let k in conteggio) {
//   array.push([k, conteggio[k]]);
// }

// // ordinamento
// array.sort((a, b) => b[1] - a[1]);

// console.log(array);




