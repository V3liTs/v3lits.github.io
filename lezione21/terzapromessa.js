function checkFreeRoom() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function checkRestaurant() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  console.log("**** INIZIO PRENOTAZIONE ****");
  const promiseReservation = new Promise((resolve, reject) => {
    let result = checkFreeRoom();
    // console.log("Result: " + result);
    if (result > 2) {
      console.log("Stanza libera OK!");
      resolve("stanza libera!");
    } else {
      console.log("Nessuna stanza libera KO!");
      reject("Stanza occupata");
    }
  })
    .then((messaggio) => {
      console.log(`Bene c'è una ${messaggio}`);
      console.log("Controllo ristorante...");
      let result = checkRestaurant();
      if (result > 2) {
        console.log("Ristorante libero OK!");
        return "OK";
      } else {
        console.log("Ristorante occupato KO!");
        throw new Error("Ristorante occupato");
      }
    })
    .then((successMessage) => {
      console.log(`Bene: ${successMessage}`);
    })
    .catch((errorMessage) => {
      console.log(`Peccato: ${errorMessage}`);
    })
    .finally(() => {
      console.log("**** FINITO PRENOTAZIONE ****");
    });