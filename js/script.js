"use strict";
class Smartphone {
    constructor(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    chiamata(durata) {
        this.numeroChiamate++;
        this.carica -= durata * 0.2;
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
