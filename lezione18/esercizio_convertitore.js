//Convertitore  unità di misura (g/kg) e viceversa
function converter(value, unit, targetUnit) {
    const validValues = ["g", "Kg"];
  
    //check se unit è riconosciuto g o Kg
    if (!validValues.includes(unit) || !validValues.includes(targetUnit)) {
      //  throw new Error("Il convertitore accetta solo " + validValues.toString())
      console.log(
        "ATTENZIONE: Il convertitore accetta solo " + validValues.toString()
      );
      return 0;
    }
  
    //check se value è numerico
    if (typeof value !== "number") {
      console.log("ATTENZIONE: Il convertitore accetta solo numeri");
      return 0;
    }
  
    console.log("Converto i valori...");
    let x = 0;
    if (unit === validValues[0] && targetUnit === validValues[1]) {
      x = value / 1000;
    } else if (unit === validValues[1] && targetUnit === validValues[0]) {
      x = value * 1000;
    }
  
    return x;
  }
  
  const showResult = function (result) {
    if (result != 0) {
      console.log("Risultato della conversione " + result);
    } else {
      console.log("Impossibile convertire");
    }
  };
  
  showResult(converter(1500, "g", "Kg"));
  showResult(converter(1.4, "Kg", "g"));
  
  console.log("Operazione completata");