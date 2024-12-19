

const inputKwh = document.querySelector('.input-1');
const inputKm = document.querySelector('.input-2');
const inputKg = document.querySelector('.input-3');

const btnConverti = document.querySelector(".btnConverti");

// TABLE

let valoriKwh = document.querySelector('.valori-kwh')
let valoriKm = document.querySelector('.valori-km')
let valoriKg = document.querySelector('.valori-kg')

let valoriKwhKg = document.querySelector('.valori-co2-kwh')
let valoriKmKg = document.querySelector('.valori-co2-km')
let valoriKgKg = document.querySelector('.valori-co2-kg')

let valoriTot = document.querySelector('.valori-tot')

let rowEnergetiche = document.getElementById('energetiche') 
let rowTrasporto = document.getElementById('trasporto') 
let rowCarne = document.getElementById('carne') 


let table = document.querySelector('.table')

let risultato = document.querySelector('.risultato')




inputKwh.addEventListener('keydown', function(event) {
 if(event.key === 'Enter') {
  convertoCO2kg();
 } 
} )
inputKm.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    convertoCO2kg();
  }
});
inputKg.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    convertoCO2kg();
  }
});




/* Quando il pulsante viene cliccato svolgi la funzione converttoCO2kg. 
Capire perchè con le parentesi non funziona */
btnConverti.addEventListener('click', convertoCO2kg )



function convertoCO2kg(){
  /* Si da zero come valore alle variabili in modo tale che di default non siano undefined nei momenti in cui non verrà eseguito un calcolo*/
  let risultato1 = 0,
    risultato2 = 0,
    risultato3 = 0;

  /* Se c'è un valore di input superiore a zero mostra la tabella, altrimenti non farlo.*/
  if (inputKwh.value > 0 || inputKm.value > 0 || inputKg.value > 0) {
    /*table.style.display = "block";*/
    table.classList.remove('display-none')
  } else {
    /*table.style.display = "none";*/
        table.classList.add("display-none");

  }

/* Il problema nella table nella quale c'era dello spazio a destra è stato risolto tornando al metodo di 
rimozione della classe invece che l'altro */


  /* Se il valore di input dei Kwh è maggiore di zero calcola quanti kg di cO2 
sono stati consumati ed inserisci i risultati nella tabella, se non è superiore non mostrare
la riga riguardante*/
  if (inputKwh.value > 0) {
    risultato1 = inputKwh.value * 0.233;

    valoriKwh.textContent = inputKwh.value + ' kWh' ;
    valoriKwhKg.textContent = risultato1.toFixed(2) + ' Kg' ;

    rowEnergetiche.classList.remove("display-none");
  } else {
    rowEnergetiche.classList.add("display-none");
  }

  /* Se il valore di input dei Km è maggiore di zero calcola quanti kg di cO2 
sono stati consumati ed inserisci i risultati nella tabella, se non è superiore non mostrare
la riga riguardante*/
  if (inputKm.value > 0) {
    risultato2 = inputKm.value * 0.21;

    valoriKm.textContent = inputKm.value + ' Km' ;
    valoriKmKg.textContent = risultato2.toFixed(2) + ' Kg';

    rowTrasporto.classList.remove("display-none");
  } else {
    rowTrasporto.classList.add("display-none");
  }

  /* Se il valore di input dei Kg di carne è maggiore di zero calcola quanti kg di cO2 
sono stati consumati ed inserisci i risultati nella tabella, se non è superiore non mostrare
la riga riguardante*/
  if (inputKg.value > 0) {
    risultato3 = inputKg.value * 6;

    valoriKg.textContent = inputKg.value + ' Kg' ;
    valoriKgKg.textContent = risultato3.toFixed() + ' Kg';

    rowCarne.classList.remove("display-none");
  } else {
    rowCarne.classList.add("display-none");
  }

  /* Calcola il totale dei risultati e dai i kg totali di emissioni di carbonio */

  let totale = risultato1 + risultato2 + risultato3;
  console.log(
    `Totale : ${risultato1} + ${risultato2} + ${risultato3} = ${
      risultato1 + risultato2 + risultato3
    }`
  );
  valoriTot.textContent = totale.toFixed(2) + ' Kg';

  /*Se il totale è tra 0 e 167 allora dai al totale delle emissioni di carbonio il colore verde, altrimenti rosso*/
  if (totale > 0 && totale < 167) {
    document.querySelector(".valori-tot").classList.add("verde");
  } else if (totale >= 167) {
    document.querySelector(".valori-tot").classList.add("rosso");
  }

  /*Se il totale è tra 0 e 167 allora dai un esito positivo , altrimenti se è al disopra dai un esito negativo*/

  if (totale > 0 && totale < 167) {
    risultato.innerHTML =
      'Le tue emissioni totali di carbonio <br> vanno bene, <span class="giallo"> continua così</span>.';
  } else if (totale >= 167) {
    risultato.innerHTML =
      '<span class="rosso"> Le tue emissioni totali di <br> carbonio non vanno bene, cerca <br> di abbassare i tuoi consumi.</span>';
  } else {
    risultato.textContent = null;
  }
}























