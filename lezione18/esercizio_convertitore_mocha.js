var assert = require('assert');  //variabile per i test

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

/*
showResult(converter(1500, "g", "Kg"));
showResult(converter(1.4, "Kg", "g"));
*/

describe('converterTests', function () {
  it('convert 1000g in 1Kg', function () {
      const result = converter(1000, "g", "Kg");
      assert.equal(result, 1);
  });

  it('convert 1000g in 1Kg', function () {
    const result = converter(1700, "g", "Kg");
    assert.equal(result, 1.7);
});

  it('convert 100g in 0.1Kg', function () {
      const result = converter(100, "g", "Kg");
      assert.equal(result, 0.1);
  });

  it('convert 1g in 0.001Kg', function () {
      const result = converter(1, "g", "Kg");
      assert.equal(result, 0.001);
  });

  it('convert 0g in 0Kg', function () {
      const result = converter(0, "g", "Kg");
      assert.equal(result, 0);
  });

  it('convert -1000g in 0Kg', function () {
      const result = converter(-1000, "g", "Kg");
      assert.equal(result, -1);
  });

  it('convert not a number throws', function () {
      assert.throws(() => converter("not a number", "g", "Kg"), Error, "Il convertitore accetta solo numeri");
  });

  it('convert Kg to g', function () {
      assert.equal(converter(1, "Kg", "g"), 1000);
  });

  it('convert something to blablabla', function () {
      assert.throws(() => converter(1, "something", "blabla"), Error, "Il convertitore accetta: g,Kg");
  });
});

console.log("Operazione completata");