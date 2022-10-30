class Smartphone {
  carica: number;
  private numeroChiamate: number;

  constructor(carica: number, numeroChiamate: number) {
    this.carica = carica;
    this.numeroChiamate = numeroChiamate;
  }
  ricarica(credito: number) {
    this.carica += credito;
    if (isNaN(credito)) {
      alert("inserire un valore valido");
      return (this.carica = 0);
    } else {
      return this.carica;
    }
  }
  chiamata(durata: number) {
    if (this.carica === 0) {
      alert("non hai abbastanza credito per chiamare!");
      let ricarica = prompt("devi fare una ricarica, il tuo saldo è 0");
      let valoreRicarica = Number(ricarica);
      return this.ricarica(valoreRicarica);
    } else if (durata * 0.2 > this.carica) {
      alert("Chiamata interrotta, credito 0");
      return (this.carica = 0);
    } else {
      this.carica -= durata * 0.2;
      this.numeroChiamate++;
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
let user = new Smartphone(0, 0);

document.addEventListener("DOMContentLoaded", () => {
  let display = document.querySelector(".display") as HTMLElement;

  function chiama() {
    let btnChiama = document.querySelector("#chiama");
    btnChiama?.addEventListener("click", () => {
      let tempoChiamata = Math.floor(Math.random() * 100 + 1);
      let valoreTempoChiamata = Number(tempoChiamata);
      let chiamata = user.chiamata(valoreTempoChiamata);
      let time = new Date();
      display.innerHTML = "";
      display.innerHTML += `<p> Il tuo saldo è di: ${chiamata}€ aggiornato al ` + time.getDate() + "/" + time.getDay() + " " + time.getHours() + ":" + time.getMinutes() + `</p>`;
    });
  }
  function ricarica() {
    let btnRicarica = document.querySelector("#ricarica");
    btnRicarica?.addEventListener("click", () => {
      let ricarica = prompt("quanto vuoi caricare?");
      let valoreRicarica = Number(ricarica);
      let carica = user.ricarica(valoreRicarica);
      let time = new Date();
      display.innerHTML = "";
      display.innerHTML = `<p>credito: ${carica}€ aggiornato al ` + time.getDate() + "/" + time.getDay() + " " + time.getHours() + ":" + time.getMinutes() + `</p>`;
    });
  }
  function mostraSaldo() {
    let btnSaldo = document.querySelector("#mostraSaldo");
    let time = new Date();
    btnSaldo?.addEventListener("click", () => {
      let saldo = user.numero404();
      display.innerHTML = "";
      display.innerHTML = `<p>credito: ${saldo}€ aggiornato al ` + time.getDate() + "/" + time.getDay() + " " + time.getHours() + ":" + time.getMinutes() + `</p>`;
      // let saldo = alert("il tuo saldo è  " + user1.numero404() + " aggiornato al " + time.getDate() + "/" + time.getDay() + " " + time.getHours() + ":" + time.getMinutes());
    });
  }
  function chiamateEffettuate() {
    let btnChiamateEffettuate = document.querySelector("#chiamateEffettuate");
    let time = new Date();
    btnChiamateEffettuate?.addEventListener("click", () => {
      let chiamateEffettuate = user.getNumeroChiamate();
      display.innerHTML = "";
      display.innerHTML = `<p>Chiamate effettuate: ${chiamateEffettuate} aggiornato al ` + time.getDate() + "/" + time.getDay() + " " + time.getHours() + ":" + time.getMinutes() + `</p>`;
      // let chiamateFatte = alert(
      //   "hai effettuato " + user1.getNumeroChiamate() + " chiamate " + " aggiornato al " + time.getDate() + "/" + time.getDay() + " " + time.getHours() + ":" + time.getMinutes()
      // );
    });
  }
  function azzeraChiamate() {
    let btnAzzeraChiamate = document.querySelector("#azzera");
    let time = new Date();
    btnAzzeraChiamate?.addEventListener("click", () => {
      let azzeraChiamate = user.azzeraChiamate();
      display.innerHTML = "";
      display.innerHTML = `<p>Chiamate effettuate: ${azzeraChiamate} aggiornato al ` + time.getDate() + "/" + time.getDay() + " " + time.getHours() + ":" + time.getMinutes() + `</p>`;
      // let azzeraChiamate = alert("l'elenco di chiamate è: " + user1.azzeraChiamate() + " aggiornato al " + time.getDate() + "/" + time.getDay() + " " + time.getHours() + ":" + time.getMinutes());
    });
  }

  ricarica();
  chiama();
  mostraSaldo();
  chiamateEffettuate();
  azzeraChiamate();
});
