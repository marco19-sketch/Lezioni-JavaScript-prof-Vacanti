// let x = 10;
// console.log(x);

// x = "ciao"
// console.log(x);

// const y = 5;
// console.log(y);

// var z = 20;
// console.log(z);

// function esempio(){
//     if (true) {
//         var l = 1; 
//     } 
//     console.log(l);
// }

// if (a = 3) {
//     console.log(a);
// }
// else if (a == 4) {
//     console.log(a); 
// }

// let eta = 21;
// /*
// if (eta >= 18) {
//     console.log("Sei maggiorenne");
// } else {
//     console.log("Non sei maggiorenne");
// }
// */

// if (eta >= 18 && eta < 65) { /* ! == not; || == or; && == and; != == not equal; == equality; = assignment; === strict equality */
//     if (eta < 30) {
//         console.log("Sei un giovine");
//     } else if (eta < 50) {
//         console.log("Sei un adulto forse");
//     }
//     else {
//         console.log("Sei un vecchiazzo");
//     }
// }
// function contatore(max, n) {
//     let i = 1;
//     while (i <= max) {
//         console.log(i);
//         i = i+n; /* si può anche scrivere i++ */
//         // if (i == 5) {
//         //     break; /* serve per uscire dal ciclo */
//         // }
//         // continue; /* serve per saltare l'iterazione corrente */
//     }
// }
// contatore(70, 10);

// console.log("conto alla rovescia");

//  let h = 10;
// while (h >= 0) {
//     console.log(h);
//     h = h-1; /* si può anche scrivere h-- */
//     // if (h == 5) {
//     //     break; /* serve per uscire dal ciclo */
//     // }
//     // continue; /* serve per saltare l'iterazione corrente */
// }

function somma(max, n) {
    let h = 1;
    let s = 0;
    while (h <= max) {
        h = h+n;
        s = s+h; 
    }
    return s;
}
// console.log(somma(20, 2));

// function somma1(max, n) {
//     let h = 1;
//     let s = 0;
//     do {
//         h = h+n;
//         s = s+h; 
//     } while (h <= max);
//     return s;
// }
// console.log(somma1(20, 2));

// function somma2(max) {
//     let s = 0;  
//     for (let i = 1; i <= max; i++) { /* inizializzazione; condizione; incremento */
//     s = s+i;
//     }
//     return s;
// }
// console.log(somma2(20)); 


let max;
do {
    max = parseInt(prompt("Inserisci un numero maggiore di 30:"));
} while (isNaN(max) || max <= 30);
let n;
do {
    n = parseInt(prompt("Inserisci un numero maggiore di 2:"));
} while (isNaN(n) || n <= 2);

alert(somma(max, n));

// let oggetto = {
//     chiave: "valore",
//     nome: "Mario",
//     cognome: "Rossi",
//     eta: 30,
// };   