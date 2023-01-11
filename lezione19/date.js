console.log("Esempi di data e ora");

let dayNames = new Array(
  "",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
  "Domenica"
);
let monthsNames = Array(
  "Gen",
  "Feb",
  "Mar",
  "Apr",
  "Mag",
  "Giu",
  "Lug",
  "Ago",
  "Set",
  "Ott",
  "Nov",
  "Dic"
);

const showDateInfo = function (myDate) {
  console.log(
    "+++ MOSTRO DETTAGLI DELLA DATA " + myDate.toLocaleDateString() + " +++"
  );
  console.log("Giorno della settimana (1-7) " + dayNames[myDate.getDay()]);
  console.log("Giorno " + myDate.getDate());
  console.log("Mese (0-12) " + monthsNames[myDate.getMonth()]);
  console.log("Anno " + myDate.getFullYear());
  console.log("++++++");
  console.log("Ora " + myDate.getHours());
  console.log("Minuti " + myDate.getMinutes());
};

let Year = 2023;
let Day = 11;
let Month = 0; //Gennaio parte da 0

let myDate = new Date(Year, Month, Day);
console.log("Creo una data (" + Day + " " + Month + " " + Year + ") " + myDate);

myDate = new Date(Year, Month, Day, 3, 24, 0);
console.log("Creo una data (" + Day + " " + Month + " " + Year + ") " + myDate);

console.log("++++ CALCOLO DATA ODIERNA ++++");
/*
date.toString(); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
date.toDateString(); // Tue May 12 2020
date.toTimeString(); // 18:50:21 GMT-0500 (Central Daylight Time)
date.toISOString(); // 2020-05-12T23:50:21.817Z
date.toUTCString(); // Tue, 12 May 2020 23:50:21 GMT
date.toJSON(); // 2020-05-12T23:50:21.817Z
date.toLocaleString(); // 5/12/2020, 6:50:21 PM
date.toLocaleDateString(); // 5/12/2020
date.toLocaleTimeString()
*/
myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
showDateInfo(myDate);

console.log("++++ MODIFICA DATA al 30 novembre 2024 ++++");
console.log("DATA ODIERNA " + myDate.toLocaleDateString());
myDate.setDate(30);
myDate.setFullYear(2024);
myDate.setMonth(10);
myDate.setHours(0);
myDate.setMinutes(0);
console.log("DATA MODIFICATA " + myDate.toLocaleDateString());
showDateInfo(myDate);
