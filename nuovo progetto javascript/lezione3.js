// /*Pronti per una nuova avventura!! */
// function merenda() {
//     let bananasplit = ["banana", "gelato", "whipped cream", "chocolate sauce", "sprinkles"];
//     try {
//        for (let i = 0; i < 10; i++) {
//         console.log(bananasplit[i]);
//        }
//     }
//     catch () {
//         console.log("Ops, qualcosa è andato storto!");
//     }
// }
// merenda();

// function somma(a) { 
//     return function (b) { /*closure: la funzione interna ha accesso alla variabile 'a' della funzione esterna */
//         return a + b;
//     };
// }
// console.log(somma(5)(10)); // Output: 15

// const aggiungiCinque = somma(5); /*crea una nuova funzione che aggiunge 5 a qualsiasi numero passato come argomento */
// console.log(aggiungiCinque(10)); // Output: 15
// console.log(aggiungiCinque(20)); // Output: 25

/*Funzione freccia con 2 parametri */
function somma (a,b) {
    return a + b;
}
console.log(somma(5, 10)); // Output: 15

const sommaFreccia = (a, b) =>{return a + b}; /*Funzione freccia con parametri */
const sommaFrecciaCorta = (a, b) => a + b;
console.log(sommaFreccia(5, 10)); // Output: 15
console.log(sommaFrecciaCorta(5, 10)); // Output: 15

/*Funzione freccia con un solo parametro */
function doppio (a) {
    return a * 2;
}
console.log(doppio(5)); // Output: 10

const doppioFreccia = (a) => {return a * 2}; /*Funzione freccia con un solo parametro, le parentesi sono opzionali */
const doppioFrecciaCorta = a => a * 2; /*Funzione freccia con un solo parametro, le parentesi sono opzionali */
console.log(doppioFrecciaCorta(5)); // Output: 10

/*Funzione freccia senza parametri */
function saluto() {
    return "Ciao!";
}
console.log(saluto()); // Output: Ciao!

const salutoFreccia = () => "Ciao!"; /*Funzione freccia senza parametri, le parentesi sono obbligatorie */
console.log(salutoFreccia()); // Output: Ciao!

/*Il contesto di 'this' nelle funzioni freccia */
this.nome = "Mario";

const persona = {
    nome: "Luigi", // nome è una proprietà dell'oggetto persona
    eta: 30,
    saluta: function() {  // saluta è un metodo
        console.log("Ciao, sono " + this.nome);
    }
};
persona.saluta(); // Output: Ciao, sono Luigi

/*Il contesto di 'this' nelle funzioni freccia */

const persona1 = {
    nome: "Luigi",
    saluta: function() {
        setTimeout(function() { // La funzione normale ha il proprio 'this', che in questo caso si riferisce all'oggetto globale (window in browser)
            console.log("Ciao, sono " + this.nome);
        }, 1000);
    }
};
persona1.saluta(); // Output: Ciao, sono undefined (perché 'this' si riferisce all'oggetto globale)

// Utilizzando una funzione freccia, 'this' si riferisce all'oggetto persona2
const persona2 = {
    nome: "Luigi",
    saluta: function() {
        setTimeout(() => { // La funzione freccia non ha il proprio 'this', quindi eredita quello del contesto in cui è definita
            console.log("Ciao, sono " + this.nome);
        }, 1000);
    }
};
persona2.saluta(); // Output: Ciao, sono Luigi

