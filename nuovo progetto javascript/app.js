// class Persona { //creazione classe persona
//     constructor(nome, eta) { //creazione costruttore con i parametri nome ed eta
//         this.nome = nome;
//         this.eta = eta;
//     }
//     saluta() { //creazione metodo saluta
//         console.log(`Ciao, mi chiamo ${this.nome} e ho ${this.eta} anni.`);
//     }
// }
// const persona1 = new Persona("Mario", 30); //creazione oggetto persona1
// const persona2 = new Persona("Anna", 15); //creazione oggetto persona2
// persona1.saluta(); //chiamata al metodo saluta dell'oggetto persona1
// persona2.saluta(); //chiamata al metodo saluta dell'oggetto persona2

// class Prodotto { //creazione classe prodotto
//     constructor(nome, prezzo, quantita) { //creazione costruttore con i parametri nome e prezzo
//         this.nome = nome;
//         this.prezzo = prezzo;
//         this.quantita = quantita;
//     }
//     totale () { //creazione metodo totale
//         return this.prezzo * this.quantita;
//     }
//     stampa() { //creazione metodo stampa
//         console.log(`Il prodotto ${this.nome} costa ${this.prezzo}€ e ne hai acquistati ${this.quantita}.`);
//     }
//     sconto(percentuale) { //creazione metodo sconto
//         const sconto = this.totale() * (percentuale / 100);
//         return this.totale() - sconto;
//     }
// }
// const prodotto1 = new Prodotto("Laptop", 1000, 2); //creazione oggetto prodotto1
// const prodotto2 = new Prodotto("Smartphone", 500, 3); //creazione oggetto prodotto2
// prodotto1.stampa(); //chiamata al metodo stampa dell'oggetto prodotto1
// prodotto2.stampa(); //chiamata al metodo stampa dell'oggetto prodotto2

class Animale {
    constructor(nome) { //creazione costruttore con i parametri nome e specie
        this.nome = nome;
    }
    verso() { //creazione metodo verso
        console.log(`${this.nome} fa un verso.`);
    }
}

class Cane extends Animale { //creazione classe cane che estende la classe animale
    constructor(nome, razza, hp, stamina, att, def) { //creazione costruttore con i parametri nome e razza
        super(nome); //chiamata al costruttore della classe padre
        this.razza = razza;
        this.hp = hp;
        this.stamina = stamina;
        this.attacco = att;
        this.difesa = def;
    }
    verso() { //sovrascrittura del metodo verso
        console.log(`${this.nome} abbaia.`);
    }
    ringhia() { //creazione metodo ringhia
        console.log(`${this.nome} ringhia.`);
    }
    fight(avversario) { //creazione metodo fight con parametro nome
        if (this.isAlive()) { //se il cane è vivo, allora può combattere
            console.log(`${this.nome} è pronto a combattere!`);
            avversario.hp = avversario.hp - this.danno(); //calcolo del danno inflitto al nemico

        } else {
            console.log(`${this.nome} è morto e non può combattere.`);
        }
    } //creazione metodo fight
    isAlive() { //creazione metodo alive
        return this.hp > 0;
    }
    danno() { //creazione metodo attacca
        let unDsei = Math.floor(Math.random() * 6) + 1; //lancio di un dado a sei facce
        const danno = 10 + unDsei; //calcolo del danno inflitto al nemico
        return danno;
    }
    // difendi() { //creazione metodo difendi
    //     let unDsei = Math.floor(Math.random() * 6) + 1; //lancio di un dado a sei facce
    //     const difesa = this.difesa - (this.difesa * unDsei); //calcolo della difesa del cane
    //     return difesa;
    // }
    // iniziativa() { //creazione metodo iniziativa
    //     let unDventi = Math.floor(Math.random() * 20) + 1;//lancio di un dado a venti facce
    //     return unDventi;
    // }
    // critico() { //creazione metodo critico
    //     let unDcento = Math.floor(Math.random() * 100) + 1;//lancio di un dado a cento facce
    //     if (unDcento <= 80) { //se il dado a cento facce è minore o uguale a 10, allora si verifica un colpo critico
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // dannoCritico() { //creazione metodo dannoCritico
    //     let dannoCritico = this.danno() * 3; //calcolo del danno critico inflitto al nemico
    //     return dannoCritico;
    // }  
}
// const cane1 = new Cane("Fido", "Labrador", 100, 50, 20, 10); //creazione oggetto cane1
// cane1.verso(); //chiamata al metodo verso dell'oggetto cane1
// cane1.ringhia(); //chiamata al metodo ringhia dell'oggetto cane1
// const cane2 = new Cane("Rex", "Pastore Tedesco", 120, 60, 25, 15); //creazione oggetto cane2
// cane2.verso(); //chiamata al metodo verso dell'oggetto cane2
// cane2.ringhia(); //chiamata al metodo ringhia dell'oggetto cane2
// cane1.fight(cane2); //chiamata al metodo fight dell'oggetto cane1


let branco = []; //creazione array branco con i cani

function brancoDiCani(num) {
    for (let i = 0; branco.length < num; i++) { //finché il branco ha meno di 30 cani, continua a creare nuovi cani
        let c = new Cane(`Canuzzo${i}`, "Pastore Maremmano", Math.floor(Math.random() * 100), Math.floor(Math.random() * 50), Math.floor(Math.random() * 20), Math.floor(Math.random() * 30)); //creazione di un nuovo cane con nome e razza generici
        branco.push(c); //aggiunta del nuovo cane al branco
    }
}
brancoDiCani(10); //chiamata alla funzione brancoDiCani con parametro 10 per creare un branco di 10 cani
console.log(branco); //stampa del branco di cani
console.log(branco[0]);

while (cane1.isAlive() && cane2.isAlive()) { //finché entrambi i cani sono vivi, continuano a combattere
    if (cane1.isAlive()) {
        cane1.fight(cane2);
    }
    if (cane2.isAlive()) {
        cane2.fight(cane1);
    }
}

for (let i = 0; i < branco.length; i++) {
    if (branco[i].isAlive()) {
        console.log(`${branco[i].nome} è vivo con ${branco[i].hp} hp rimanenti.`);
    } else {
        console.log(`${branco[i].nome} è morto.`);
    }
} //

// cane1.fight(cane2);
// console.log(cane1.hp);
// console.log(cane2.hp);
// cane1.fight(cane2);
// console.log(cane1.hp);
// console.log(cane2.hp);

if (!cane1.isAlive()) {
    console.log(`${cane1.nome} è morto.`);
    cane1.hp = 0; //imposta gli hp del cane1 a 0 per evitare valori negativi
    console.log(`${cane2.nome} ha vinto con ${cane2.hp} hp rimanenti.`);
}

if (!cane2.isAlive()) {
    console.log(`${cane2.nome} è morto.`);
    cane2.hp=0;

}
