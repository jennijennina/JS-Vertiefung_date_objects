const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});
//ab hier Aufgabe
console.log("%c===== lev1_1: date new Date()=====", "background-color:green");
//!SECTION
// In dieser Übung werden wir Date() lernen.
// Stelle die folgenden Daten im HTML-Dokument mit Hilfe des Befehls new Date() dar.

// Speichere die Werte in einer Variable (date1, date2, …)
// Nutze innerHTML um das Ergebnis darzustellen.
// Teste dann die Werte:
// new Date("September 2, 2019 09:00:00")
// new Date(0)
// new Date(31556908800)
// new Date(86400000)
// Variablen bennen
let d = new Date();
console.log(new Date());
console.log(d);
result.innerHTML = d;
let d2 = new Date(0);
console.log(d2);
result.innerHTML = d2;
let d3 = new Date(1235467587);
console.log(d3);
result.innerHTML = d3;
let d4 = new Date(86400000);
console.log(d4);
result.innerHTML = d4;
console.log("%c===== lev1_2: Date Methods =====", "background-color:green");

let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];
console.log(monate[10], wochenTag[3]);

// Variablen bennen und deklarieren
let date = new Date();
d5.innerHTML = date;
d6.innerHTML = date.getFullYear();
d7.innerHTML = date.getMonth();
d8.innerHTML = date.getDate();
d9.innerHTML = date.getHours();
d10.innerHTML = date.getMinutes();
d11.innerHTML = wochenTag[4];
d12.innerHTML = monate[10];
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());

console.log("%c===== lev1_5: Monatsname =====", "background-color:green");
// Schreibe eine Funktion, die den Monatsnamen anhand eines bestimmten Datums ermittelt.
// Verwende den Code aus dem Kommentar.
// Nutze getMonth() um die Aufgabe zu lösen.
// Überprüfe deine Funktion mit folgenden Argumenten in der Konsole:
// console.log(monatsName("2001,3,4")); //März
// console.log(monatsName("2019,12,24")); //Dezember
// console.log(monatsName("1410,07,15")); //Juli
// //
let list = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];
function monatsName() {
  let d = new Date();
  monate[d.getMonth()];
  console.log(monate[d.getMonth()]);
}

console.log(monatsName("2001,3,4")); //März
console.log(monatsName("2019,12,24")); //Dezember
console.log(monatsName("1410,07,15")); //Juli

console.log("%c===== lev1_6: AM PM =====", "background-color:green");
// Schreibe eine Funktion, um AM und PM zu erhalten.
// Wenn die Uhrzeit kleiner als 12 Uhr ist, wird AM angezeigt.
// Wenn die Uhrzeit größer als 12 Uhr ist, wird PM angezeigt.
// Die Funktion enthält:
// Ein Parameter
// Ternary Operator oder if
// getHours()
// Überprüfe deine Funktion in der Konsole.
// Teste sie mit folgenden Argumenten:
date1 = new Date(1999, 10, 5, 15); //PM
date2 = new Date();
date3 = new Date(2019, 12, 3, 12); //AM
date4 = new Date(2000, 1, 1, 11); //AM
date1 = new Date(1999, 10, 5, 15); //PM

function amOrPm(b) {
  if (b.getHours() > 12) {
    console.log("AM");
  } else {
    console.log("PM");
  }
}
amOrPm(date1);
amOrPm(date2);
amOrPm(date3);
amOrPm(date4);

console.log("%c===== lev1_7: Weekend =====", "background-color:green");
// Schreibe eine Funktion, die überprüft, ob an einem bestimmten Datum Wochenende ist oder nicht.
// Schreibe eine Funktion und überprüfe dein Ergebnis in der Konsole.
// Nutze:
// Conditionals Statement
// Comparison Operators
// Funktion mit einem Parameter
// Aktuelles Datum
// getDay()
// return "Weekend"
// return "Arbeitstag"
// Teste folgende Daten: 12.15.2019, 2.16.2001, 2.1.2020, 2.29.2020.

console.log(istWeekend("12, 15, 2019"));
console.log(istWeekend("2, 16, 2001"));
console.log(istWeekend("2, 1, 2020"));
console.log(istWeekend("2, 29, 2020"));
function istWeekend(w) {
  let d = new Date(w);
  console.log(d);
  if (d.getDay() === 0 || d.getDay() > 5) {
    return console.log("weekend");
  } else {
    return console.log("Arbeitstag");
  }
}
console.log("%c===== lev1_9: Clock =====", "background-color:green");
// Zeige eine Uhr, die mit einem Timing-Event erstellt wurde.

// Schreibe eine Funktion startTime, die die aktuelle Uhrzeit anzeigt.
// Versuche es selbst zu schreiben.
// Zeige das Ergebnis im HTML Dokument an.
// Verbinde das Uhrendesign von Aufgabe Lev1_2 GET Date Methods mit dieser Funktion
let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let period = document.getElementById("period");

let wochenTag1 = [
  "Sun", //0
  "Mon", //1
  "Tue", //2
  "Wed", //3
  "Thu", //4
  "Fri", //5
  "Sat", //6
];

function startTime() {
  let watch = new Date();

  hour.innerHTML = watch.getHours();
  minutes.innerHTML = watch.getMinutes();
  seconds.innerHTML = watch.getSeconds();
  day.innerHTML = wochenTag1[watch.getDay()];

  if (watch.getHours() <= 12) {
    period.innerHTML = "AM";
  } else {
    period.innerHTML = "PM";
  }
  setInterval(startTime, 1000);
}
