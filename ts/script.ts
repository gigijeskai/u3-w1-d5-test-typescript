class Smartphone {
  carica: number;
  numeroChiamate: number;
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
    });
  }
  function ricarica() {
    let btnRicarica = document.querySelector("#ricarica");
    btnRicarica?.addEventListener("click", () => {
      let ricarica = prompt("quanto vuoi caricare?");
      let valoreRicarica = Number(ricarica);
      let carica = user1.ricarica(valoreRicarica);
      display.innerHTML += `<p>${carica}</p>`;
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

// function createSmartphone() {
//   let chiamata = document.querySelector("#numeroChiamate") as HTMLInputElement;
//   let ricarica = document.getElementById("#creditoResiduo") as HTMLInputElement;
//   let utente1 = new Smartphone(Number(ricarica.value), Number(chiamata.value));
//   return utente1;
// }

// function daiInput() {
//   let tempoChiamata = document.querySelector("#tempoChiamata") as HTMLInputElement;
//   let ricarica = document.querySelector("#credito") as HTMLInputElement;
//   let user1 = new Smartphone(parseInt(tempoChiamata.value), parseInt(ricarica.value));
//   mostraOpzioni(user1);
// }
/*
function mostraOpzioni() {
  let tempoChiamata = document.querySelector("#tempoChiamata") as HTMLInputElement;
  let numeroTempoChiamata = Number(tempoChiamata);
  let ricarica = document.querySelector("#credito") as HTMLInputElement;
  let numeroRicarica = Number(ricarica);
  let user1 = new Smartphone(numeroTempoChiamata, numeroRicarica);
  let div = document.querySelector("#display");
  let p = document.createElement("p");
  p.innerHTML = ` <span> credito residuo: ${user1.numero404()}</span><br />
   <span> numero di chiamate effettuate: ${user1.ricarica(numeroRicarica)}</span><br />
   <span> numero di chiamate effettuate: ${user1.chiamata(numeroTempoChiamata)}</span><br />
   <span> numero di chiamate effettuate: ${user1.getNumeroChiamate()}</span><br />
   <span> azzera chiamate: ${user1.azzeraChiamate()}</span><br />`;
  div?.appendChild(p);
}
/*

// function daiInput() {
//   let chiamata = document.querySelector("#tempoChiamata") as HTMLInputElement;
//   let ricarica = document.querySelector("#credito") as HTMLInputElement;
//   let user1 = new Smartphone(parseInt(chiamata.value), parseInt(ricarica.value));
//   display(user1);
// }
// function display(obj: Smartphone) {
//   let displayChiamate = document.querySelector("#chiamate");
//   let p = document.createElement("p");
//   p.innerHTML = `numero chiamate${obj.chiamata}
//   credito${obj.ricarica}`;
//   displayChiamate?.appendChild(p);

// function display(obj: Smartphone) {}
// function calcolaCreditoEChiamate() {
//   let tempoChiamata = document.querySelector("#tempoChiamata") as HTMLInputElement;
//   let ricarica = document.querySelector("#credito") as HTMLInputElement;
//   let user1 = new Smartphone(parseInt(tempoChiamata.value), parseInt(ricarica.value));
//   display(user1);
// }
// function display(obj: Smartphone) {
//   let div = document.querySelector("#display");
//   let p = document.createElement("p");
//   p.innerHTML = `<p>saldo corrente</p>${obj.numero404()}
// }<p>numero chiamate</p>${obj.getNumeroChiamate()}`;
//   div?.appendChild(p);
// }

// document.addEventListener("DOMContentLoaded", () => {
//   let btn = document.querySelectorAll(".addValue");
//   btn.forEach((elem) => {
//     elem.addEventListener("click", ricarica);
//   });
//   function ricarica() {
//     let chiamata = document.querySelector("#tempoChiamata") as HTMLInputElement;
//     let ricarica = document.querySelector("#credito") as HTMLInputElement;
//     let displayChiamate = document.querySelector("#chiamate") as HTMLInputElement;
//     let displayCredito = document.querySelector("#credito") as HTMLInputElement;
//     let user1 = new Smartphone(parseInt(chiamata.value), parseInt(ricarica.value));
//     displayChiamate.value = chiamata.value;
//     displayCredito.value = ricarica.value;
//   }
// });*/
