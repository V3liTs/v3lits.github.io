"use strict";

try {
    nonExistentFunction();
  } catch (error) {
    console.log('Si è verificato un errore. Riprova più tardi. Ragione: ' +error.message);
  } finally  {
    console.log ("Sicuramente è successo qualcosa...");
  }
  
  console.log ("Creo errrore personalizzato");

  try {
    console.log ("Questo mio programma...");
    try {
      throw new Error("mio errore personalizzato");
    } finally {
      console.log("finally");
    }
  } catch (ex) {
    console.error("outer", ex.message);
  }