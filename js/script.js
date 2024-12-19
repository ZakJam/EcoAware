

const inputKwh = document.querySelector('.input-1');
const inputKm = document.querySelector('.input-2');
const inputKg = document.querySelector('.input-3');

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









const btnConverti = document.querySelector('.btnConverti')

/* Quando il pulsante viene cliccato svolgi la funzione converttoCO2kg */
btnConverti.addEventListener('click', 
    
function convertoCO2kg(){

let risultato1, 
risultato2, 
risultato3;


/* Se c'è un valore di input superiore a zero mostra la tabella, altrimenti non farlo.*/ 
if(inputKwh.value > 0 || inputKm.value > 0 || inputKg.value > 0) {
table.style.display = 'block';    
} else {
    table.style.display = 'none';
}


/* Se il valore di input dei Kwh è maggiore di zero calcola quanti kg di cO2 
sono stati consumati ed inserisci i risultati nella tabella, se non è superiore non mostrare
la riga riguardante*/
if (inputKwh.value > 0 ) {

    risultato1 = inputKwh.value * 0.233;

    valoriKwh.textContent = inputKwh.value;
    valoriKwhKg.textContent = risultato1.toFixed(2);
    
    rowEnergetiche.classList.remove('display-none')

} else {
    rowEnergetiche.classList.add('display-none')

}

/* Se il valore di input dei Km è maggiore di zero calcola quanti kg di cO2 
sono stati consumati ed inserisci i risultati nella tabella, se non è superiore non mostrare
la riga riguardante*/
if (inputKm.value > 0) {

    risultato2 = inputKm.value * 0.21 ;

    valoriKm.textContent = inputKm.value;
    valoriKmKg.textContent = risultato2.toFixed(2);

    rowTrasporto.classList.remove('display-none')

} else {
    rowTrasporto.classList.add('display-none')
}



/* Se il valore di input dei Kg di carne è maggiore di zero calcola quanti kg di cO2 
sono stati consumati ed inserisci i risultati nella tabella, se non è superiore non mostrare
la riga riguardante*/
if (inputKg.value > 0) {

    risultato3 = inputKg.value * 6 ;

    valoriKg.textContent = inputKg.value;
    valoriKgKg.textContent = risultato3.toFixed(2);

    rowCarne.classList.remove('display-none')


} else {
    rowCarne.classList.add('display-none')
}



/* Calcola il totale dei risultati e dai i kg totali di emissioni di carbonio */

let totale = risultato1 + risultato2 + risultato3;

valoriTot.textContent = totale.toFixed(2);


})












