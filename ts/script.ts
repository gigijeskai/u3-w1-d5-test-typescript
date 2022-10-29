class Smartphone {
  carica: number;
  numeroChiamate: number = 0;
  constructor(carica: number, numeroChiamate: number) {
    this.carica = carica;
    this.numeroChiamate = numeroChiamate;
  }
  ricarica(credito: number) {
    this.carica += credito;
    return this.carica;
  }
  chiamata(durata: number) {
    this.numeroChiamate++;
    this.carica -= durata * 0.2;
    if (this.carica <= 0) {
      alert("non hai abbastanza credito per chiamare!");
      let ricarica = prompt("devi fare una ricarica, il tuo saldo è 0");
      let valoreRicarica = Number(ricarica);
      return this.ricarica(valoreRicarica);
    }
    return this.carica;
    //deve aggiungere la chiamata a numero chiamate
    //deve scalare il credito da carica per 0.20cent per ogni minuto di durata
  }
  numero404(): number {
    return this.carica;
    // deve restituire il valore della carica
  }
  getNumeroChiamate(): number {
    return this.numeroChiamate;
    // deve restituire il numero di chiamate
  }
  azzeraChiamate(): number {
    return (this.numeroChiamate = 0);
    // deve azzerare le chiamate
  }
}
let user1 = new Smartphone(0, 0);

// console.log(user1);
// console.log(user1.ricarica(1));
// console.log(user1.chiamata(4));
// console.log(user1.chiamata(4));

document.addEventListener("DOMContentLoaded", () => {
  let display = document.querySelector("#display") as HTMLElement;

  //   function mostraASchermo() {
  //     display.innerHTML += `<p>${user1.carica}</p>`;
  //   }
  function chiama() {
    let btnChiama = document.querySelector("#chiama");
    btnChiama?.addEventListener("click", () => {
      let tempoChiamata = prompt("quanto dura la chiamata? ");
      let valoreTempoChiamata = Number(tempoChiamata);
      let chiamata = user1.chiamata(valoreTempoChiamata);
      display.innerHTML += `<p>${chiamata}</p>`;
      display.innerHTML = "";
    });
  }
  function ricarica() {
    let btnRicarica = document.querySelector("#ricarica");
    btnRicarica?.addEventListener("click", () => {
      let ricarica = prompt("quanto vuoi caricare?");
      let valoreRicarica = Number(ricarica);
      let carica = user1.ricarica(valoreRicarica);
      display.innerHTML = `<p>credito: ${carica}</p>`;
      display.innerHTML = "";
    });
  }
  function mostraSaldo() {
    let btnSaldo = document.querySelector("#mostraSaldo");
    btnSaldo?.addEventListener("click", () => {
      let saldo = alert("il tuo saldo è  " + user1.numero404());
    });
  }
  function chiamateEffettuate() {
    let btnChiamateEffettuate = document.querySelector("#chiamateEffettuate");
    btnChiamateEffettuate?.addEventListener("click", () => {
      let chiamateFatte = alert("hai effettuato " + user1.getNumeroChiamate());
    });
  }
  function azzeraChiamate() {
    let btnAzzeraChiamate = document.querySelector("#azzera");
    btnAzzeraChiamate?.addEventListener("click", () => {
      let azzeraChiamate = alert("l'elenco di chiamate è: " + user1.azzeraChiamate());
    });
  }

  ricarica();
  chiama();
  mostraSaldo();
  chiamateEffettuate();
  azzeraChiamate();
});
