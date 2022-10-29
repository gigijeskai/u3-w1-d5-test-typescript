class Smartphone {
  carica: number;
  private numeroChiamate: number = 0;
  constructor(carica: number, numeroChiamate: number) {
    this.carica = carica;
    this.numeroChiamate = numeroChiamate;
  }
  ricarica(credito: number) {
    this.carica += credito;
    return this.carica;
  }
  chiamata(durata: number) {
    if (this.carica <= 0) {
      alert("non hai abbastanza credito per chiamare!");
      let ricarica = prompt("devi fare una ricarica, il tuo saldo è 0");
      let valoreRicarica = Number(ricarica);
      return this.ricarica(valoreRicarica);
    } else {
      this.numeroChiamate++;
      this.carica -= durata * 0.2;
    }
    return this.carica;
    //deve aggiungere la chiamata a numero chiamate
    //deve scalare il credito da carica per 0.20cent per ogni minuto di durata
  }
  numero404(): number {
    return this.carica;
    // deve restituire il valore della carica
  }
  public getNumeroChiamate(): number {
    return this.numeroChiamate;
    // deve restituire il numero di chiamate
  }
  azzeraChiamate(): number {
    return (this.numeroChiamate = 0);
    // deve azzerare le chiamate
  }
}
let user1 = new Smartphone(0, 0);
let user2 = new Smartphone(0, 0);
let user3 = new Smartphone(0, 0);

document.addEventListener("DOMContentLoaded", () => {
  let display = document.querySelector("#display") as HTMLElement;

  function registraChiamata() {
    let tempoChiamata = prompt("quanto dura la chiamata? ");
    let valoreTempoChiamata = Number(tempoChiamata);
    let chiamata = user1.chiamata(valoreTempoChiamata);
    display.innerHTML = "";
    display.innerHTML += `<p>${chiamata}</p>`;
  }

  function chiama() {
    let btnChiama1 = document.querySelector("#chiama1");
    btnChiama1?.addEventListener("click", registraChiamata);

    let btnChiama2 = document.querySelector("#chiama2");
    btnChiama2?.addEventListener("click", registraChiamata);

    let btnChiama3 = document.querySelector("#chiama3");
    btnChiama3?.addEventListener("click", registraChiamata);
  }
  function ricarica() {
    let btnRicarica = document.querySelector("#ricarica");
    btnRicarica?.addEventListener("click", () => {
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
    btnSaldo?.addEventListener("click", () => {
      let saldo = alert("il tuo saldo è  " + user1.numero404() + " aggiornato al " + time.getDate() + "/" + time.getDay() + " " + time.getHours() + ":" + time.getMinutes());
    });
  }
  function chiamateEffettuate() {
    let btnChiamateEffettuate = document.querySelector("#chiamateEffettuate");
    let time = new Date();
    btnChiamateEffettuate?.addEventListener("click", () => {
      let chiamateFatte = alert(
        "hai effettuato " + user1.getNumeroChiamate() + " chiamate " + " aggiornato al " + time.getDate() + "/" + time.getDay() + " " + time.getHours() + ":" + time.getMinutes()
      );
    });
  }
  function azzeraChiamate() {
    let btnAzzeraChiamate = document.querySelector("#azzera");
    let time = new Date();
    btnAzzeraChiamate?.addEventListener("click", () => {
      let azzeraChiamate = alert("l'elenco di chiamate è: " + user1.azzeraChiamate() + " aggiornato al " + time.getDate() + "/" + time.getDay() + " " + time.getHours() + ":" + time.getMinutes());
    });
  }

  ricarica();
  chiama();
  mostraSaldo();
  chiamateEffettuate();
  azzeraChiamate();
});
