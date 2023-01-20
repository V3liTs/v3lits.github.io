import { Alert } from "bootstrap";
import React, { useState, useEffect } from "react";

function writeConsole(count)
{
  console.log ("Hai premuto il bottone "+count);
}


function Esempio() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Hai cliccato ${count} volte`;
    return()=> {
      writeConsole(count);
    }
  });

  return (
    <div>
      <p>Questo è un esempio</p>
      <button onClick={() => setCount(count + 1)}>Clicca</button>
    </div>
  );
}

export default Esempio;