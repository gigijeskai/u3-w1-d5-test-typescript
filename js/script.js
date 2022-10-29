"use strict";
class Smartphone {
    constructor(carica, numeroChiamate) {
        this.numeroChiamate = 0;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(credito) {
        this.carica += credito;
        return this.carica;
    }
    chiamata(durata) {
        if (this.carica <= 0) {
            alert("non hai abbastanza credito per chiamare!");
            let ricarica = prompt("devi fare una ricarica, il tuo saldo è 0");
            let valoreRicarica = Number(ricarica);
            return this.ricarica(valoreRicarica);
        }
        else {
            this.numeroChiamate++;
            this.carica -= durata * 0.2;
        }
        return this.carica;
        //deve aggiungere la chiamata a numero chiamate
        //deve scalare il credito da carica per 0.20cent per ogni minuto di durata
    }
    numero404() {
        return this.carica;
        // deve restituire il valore della carica
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
        // deve restituire il numero di chiamate
    }
    azzeraChiamate() {
        return (this.numeroChiamate = 0);
        // deve azzerare le chiamate
    }
}
let user1 = new Smartphone(0, 0);
document.addEventListener("DOMContentLoaded", () => {
    let display = document.querySelector("#display");
    function chiama() {
        let btnChiama = document.querySelector("#chiama");
        btnChiama === null || btnChiama === void 0 ? void 0 : btnChiama.addEventListener("click", () => {
            let tempoChiamata = prompt("quanto dura la chiamata? ");
            let valoreTempoChiamata = Number(tempoChiamata);
            let chiamata = user1.chiamata(valoreTempoChiamata);
            display.innerHTML = "";
            display.innerHTML += `<p>${chiamata}</p>`;
        });
    }
    function ricarica() {
        let btnRicarica = document.querySelector("#ricarica");
        btnRicarica === null || btnRicarica === void 0 ? void 0 : btnRicarica.addEventListener("click", () => {
            let ricarica = prompt("quanto vuoi caricare?");
            let valoreRicarica = Number(ricarica);
            let carica = user1.ricarica(valoreRicarica);
            let time = new Date();
            display.innerHTML = "";
            display.innerHTML = time.getDate() + "/" + time.getDay() + " " + time.getHours() + ":" + time.getMinutes() + `<p>credito: ${carica}</p>`;
        });
    }
    function mostraSaldo() {
        let btnSaldo = document.querySelector("#mostraSaldo");
        let time = new Date();
        btnSaldo === null || btnSaldo === void 0 ? void 0 : btnSaldo.addEventListener("click", () => {
            let saldo = alert("il tuo saldo è  " + user1.numero404() + " aggiornato al " + time.getDate() + "/" + time.getDay() + " " + time.getHours() + ":" + time.getMinutes());
        });
    }
    function chiamateEffettuate() {
        let btnChiamateEffettuate = document.querySelector("#chiamateEffettuate");
        let time = new Date();
        btnChiamateEffettuate === null || btnChiamateEffettuate === void 0 ? void 0 : btnChiamateEffettuate.addEventListener("click", () => {
            let chiamateFatte = alert("hai effettuato " + user1.getNumeroChiamate() + " chiamate " + " aggiornato al " + time.getDate() + "/" + time.getDay() + " " + time.getHours() + ":" + time.getMinutes());
        });
    }
    function azzeraChiamate() {
        let btnAzzeraChiamate = document.querySelector("#azzera");
        let time = new Date();
        btnAzzeraChiamate === null || btnAzzeraChiamate === void 0 ? void 0 : btnAzzeraChiamate.addEventListener("click", () => {
            let azzeraChiamate = alert("l'elenco di chiamate è: " + user1.azzeraChiamate() + " aggiornato al " + time.getDate() + "/" + time.getDay() + " " + time.getHours() + ":" + time.getMinutes());
        });
    }
    ricarica();
    chiama();
    mostraSaldo();
    chiamateEffettuate();
    azzeraChiamate();
});
