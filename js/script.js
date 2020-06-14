/*Un alert espone 5 numeri casuali.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha
visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software
dice quanti e quali dei numeri da indovinare sono stati individuati*/


// Creare un alert con 5 numeri random!!
var varCreaNumeriRandom = creaNumeriRandom(5, 100);
alert('Ricordati questi numeri: ' + varCreaNumeriRandom)

    /**************************************************************************/
    // FUNCTION: creaNumeriRandom: Questa Funzione serve per creare numeri Random.
    //   --> lunghezzaArray;
    //   --> rangeMax;
    function creaNumeriRandom(lunghezzaArray, rangeMax){
      var arrayNumeriRandom = [];
      for( var i = 0; i < lunghezzaArray; i++){
        var numero = Math.round(Math.random()*rangeMax);
        arrayNumeriRandom.push(numero)
      }
      console.log(arrayNumeriRandom);
      return arrayNumeriRandom;
    }
    /**************************************************************************/

// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha
// visto precedentemente.
setTimeout(function(){
  confrontoArray(varCreaNumeriRandom);
}, 30000);

// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono stati individuati.

    /**************************************************************************/
    // FUNCTION: confrontoArray : Questa Funzione serve per confrontare 2 Array!
    //   --> arrayDaConfrontare;
    function confrontoArray(arrayDaConfrontare){
      // Crea variante che cambiare il suo valore Booleano quando trova un numero che si trova dentro del'altro Array da confrontare!!
      var numeroCorretto = false;
      // Crea Array che contenera tutti i numeri trovati.
      var arrayIndovinati = [];

    // Richiama 5 volte "Prompt", per inserire un numero!
    for(var i = 0; i < 5; i++){
      var numeroUtente = parseInt(prompt('Inserisce un numero  e ricordatelo: '));

      // Controlla se il numero appena inserito, sia dentro del Array principale!!!
      for(var j = 0 ; j < arrayDaConfrontare.length; j++ ){

        // se il numero inserito si trova nel Array, fai diventare "TRUE" la variante!!
        if(arrayDaConfrontare[j]===numeroUtente){
           numeroCorretto = true;
        }
      }
      // Se la variante è "TRUE", stampa 'FINE' e poi aggiungela a "arrayIndovinati[]", e fai un reset de la variante!!
      // Altrementi se la variante è ancora "False", stampa 'SORRY', e riparte col ciclo!!
      if(numeroCorretto){
        console.log(numeroUtente + ' FINE!! è stato indovinato!!')
        arrayIndovinati.push(numeroUtente);
        numeroCorretto = false;
      } else {
        console.log(numeroUtente + ' SORRY!! non hai indovinato!')
      }

    }
    // Stampa i "NUMERI INDOVINATI"!
    console.log('Questi sono i numeri che hai indovinato ' + arrayIndovinati)
    // Stampa "QUANTI NUMERI HAI INDOVINATO"!
    console.log('hai indovinato ' + arrayIndovinati.length + ' su ' + arrayDaConfrontare.length + ' numeri!!!' )
    }
    /**************************************************************************/
