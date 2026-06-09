
// function somma(max, n) {
//     let h = 1;
//     let s = 0;
//     while (h <= max) {
//         h = h+n;
//         s = s+h; 
//     }
//     return s;
// }

// let nome = prompt("Come ti chiami?");
// alert("Ciao " + nome + ", benvenuto nel mondo della programmazione!");
// let ok = confirm("SEI SICURO?");
// if (ok) {
//     let max;
//     do {
//         max = parseInt(prompt("Inserisci un numero maggiore di 30:"));
//     } while (isNaN(max) || max <= 30);
//     let n;
//     do {
//         n = parseInt(prompt("Inserisci un numero maggiore di 2:"));
//     } while (isNaN(n) || n <= 2);
//     alert(somma(max, n));
// } else {
//     alert("Hai fatto bene.");
// }
/*io sono un oggetto persona con al suo interno una chiave valore con una funzione*/
const persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 30,
    saluta() {
        console.log("Ola Hombre! me llamo " + this.nome + " " + this.cognome + " e ho " + this.eta + " anni.");
    }, 
    ringrazia() {     
        console.log("Sono contento di dirti" + " che ho " + this.eta + " anni.");
    }
};
metodo = prompt("Quale metodo vuoi eseguire? (saluta o ringrazia)");
persona[metodo]();

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeri[4]); /*output: 5*/

const alunni = ["Mario", "Luigi", "Patato", "Patata", "Pataaaato"];
console.log(alunni[1]); /*output: Luigi*/
alunni[1] = "Peach";
console.log(alunni[1]); /*output: Peach*/

const arrey_vuoto = [];
console.log(arrey_vuoto); /*output: []*/

const misto = [1, "Ciao", true, null, undefined, { nome: "Mario" }, [1, 2, 3]];
console.log(misto); /*output: [1, "Ciao", true, null, undefined, { nome: "Mario" }, [1, 2, 3]]*/
console.log(misto[5].nome); /*output: Mario*/
console.log(misto[6][1]); /*output: 2*/

console.log("*****************************************************************\n\n\n\n");

console.log(alunni); /*output: ["Mario", "Peach", "Patato", "Patata", "Pataaaato"]*/

alunni.push("Cipolla"); /* aggiunge un elemento alla fine dell'array */
console.log(alunni); /*output: ["Mario", "Peach", "Patato", "Patata", "Pataaaato", "Cipolla"]*/

elemento = alunni.pop(); /* rimuove l'ultimo elemento dell'array */
console.log(elemento); /*output: Cipolla*/
console.log(alunni); /*output: ["Mario", "Peach", "Patato", "Patata", "Pataaaato"]*/

alunni.pop([2]); /* rimuove l'ultimo elemento dell'array, non importa l'argomento passato */
console.log(alunni); /*output: ["Mario", "Peach", "Patato", "Patata"]*/

alunni.unshift("Cipolla"); /* aggiunge un elemento all'inizio dell'array */
console.log(alunni); /*output: ["Cipolla", "Mario", "Peach", "Patato", "Patata", "Pataaaato"]*/

alunni.shift(); /* rimuove il primo elemento dell'array */
console.log(alunni); /*output: ["Mario", "Peach", "Patato", "Patata", "Pataaaato"]*/

alunni.length; /* restituisce la lunghezza dell'array */
console.log(alunni.length); /*output: 5*/

for (let i = 0; i < alunni.length; i++) {
    console.log(alunni[i]);
} /*output: Mario, Peach, Patato, Patata, Pataaaato*/

for (let Lalunno of alunni) { /*for each*/
    console.log(Lalunno);
} /*output: Mario, Peach, Patato, Patata, Pataaaato*/

const grandi = numeri.filter(x => x > 8); /* restituisce un nuovo array con i numeri maggiori di 8 */
console.log(grandi); /*output: [9, 10]*/

const doppi = numeri.map(x => x * 2); /* restituisce un nuovo array con i numeri doppi */
console.log(doppi); /*output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]*/

const utenti =[ {id: 1, nome: "Mario", saldo: 100}, {id: 2, nome: "Luigi", saldo: 200}, {id: 3, nome: "Peach", saldo: 50}];
let u = utenti.find(x => x.id === 3); /* restituisce il primo elemento che soddisfa la condizione */
console.log(u); /*output: {id: 3, nome: "Peach", saldo: 50}*/

u = utenti.filter(x => x.saldo >= 100); /* restituisce un nuovo array con gli elementi che soddisfano la condizione */
console.log(u); /*output: [{id: 1, nome: "Mario", saldo: 100}, {id: 2, nome: "Luigi", saldo: 200}]*/

const risultati = utenti.filter(u => u.saldo >= 100).map(u => u.nome); /* restituisce un nuovo array con i nomi degli utenti che hanno un saldo maggiore o uguale a 100 */
console.log(risultati); /*output: ["Mario", "Luigi"]*/

const matrice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrice[0][3]); /*output: undefined, perché l'indice 3 non esiste nella prima riga della matrice*/
console.log(matrice[1][2]); /*output: 6, perché l'indice 2 esiste nella seconda riga della matrice*/

for (let i = 0; i < matrice.length; i++) {  /* iterazione sulle righe della matrice */
    for (let j = 0; j < matrice[i].length; j++) { /* iterazione sugli elementi della riga i */
        console.log(matrice[i][j]);
    }
}
/*output: 1, 2, 3, 4, 5, 6, 7, 8, 9*/

for (let riga of matrice) {
    for (let elemento of riga) {
        console.log(elemento);
    }
}
/*output: 1, 2, 3, 4, 5, 6, 7, 8, 9*/

matrice[1][1] = 50; /* modifica l'elemento al centro della matrice */
console.log(matrice); /*output: [[1, 2, 3], [4, 50, 6], [7, 8, 9]]*/

let matrice_irregolare = [
    [1, 2],
    [3, 4, 5],
    [6]
];
console.log(matrice_irregolare); /*output: [[1, 2], [3, 4, 5], [6]]*/

const vendite = [
    ["Gennaio", 1000],
    ["Febbraio", 1500],
    ["Marzo", 2000, "Extra"]
];
console.log(vendite[0][1]); /*output: 1000, perché l'indice 1 della prima riga della matrice vendite contiene il valore 1000*/

matrice.flat(); /* restituisce un nuovo array con tutti gli elementi della matrice "appiattiti" in un unico livello */
console.log(matrice.flat()); /*output: [1, 2, 3, 4, 50, 6, 7, 8, 9]*/



////////////REDUCE E ACCUMULATORI//////////


