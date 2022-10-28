document.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelector(".container button");
  btn?.addEventListener("click", daiInput);
});
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
    if (this.carica === 0) {
      console.log("non hai abbastanza credito per chiamare!");
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

function daiInput() {
  let tempoChiamata = document.querySelector("#tempoChiamata") as HTMLInputElement;
  let ricarica = document.querySelector("#credito") as HTMLInputElement;
  let user1 = new Smartphone(parseInt(tempoChiamata.value), parseInt(ricarica.value));
  mostraOpzioni(user1);
}
function mostraOpzioni(obj: Smartphone) {
  let div = document.querySelector("#display");
  let p = document.createElement("p");
  p.innerHTML = ` <span> credito residuo: ${obj.numero404()}</span><br />
   <span> numero di chiamate effettuate: ${obj.getNumeroChiamate()}</span><br />
   <span> azzera chiamate: ${obj.azzeraChiamate()}</span><br />`;
  div?.appendChild(p);
}

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
// });
