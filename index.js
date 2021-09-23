/* Clean-Code-Prinzipien in JavaScript: Variablen */

// 1. aussagekräftiger und aussprechbarer Name
let arrStrings = [ "Hallo", "Hi", "Hey" ];
let greetings = [ "Hallo", "Hi", "Hey" ];
let typesOfGreetings = [ "Hallo", "Hi", "Hey" ];


// 2. suchbarer Name
let n = 25;
let age = 25;


// 3. lowerCamelCase
let fridayLunchOptions = [ "Currywurst", "Seelachs", "Spaghetti Bolognese" ];


// 4. Konstanten in Großbuchstaben
const PI = 3.14159265359;


// 5. keine magischen Zahlen
// Beispiel: Kreisumfang:
let radiusInCM = 3;
let circumferenceInCM = 2 * PI * radiusInCM;
//console.log(circumferenceInCM);


// 6. Leerzeichen um Operatoren ( = + - * / ) und nach Kommas
let name = "Linus";


// 7. Semikolon am Ende (optional)
let profession = "Developer";


// 8. Primitiver Datentyp null angeben, wenn Variable noch nicht initialisert werden soll.
let numberOfGuests = null; 
numberOfGuests = 35;
// console.log(numberOfGuests);


// 9. Booleans mit "is" beginnen
let isOpen = true;


// 10. Geltungsbereich der Variable mit den Schlüsselwörtern const und let begrenzen
const BOILING_POINT_OF_WATER_IN_CELSIUS = 100;

let isNight = false;


// 11. Template Literale, um Werte in einen String einzufügen --> keine Stringverknüpfungen (String concatenation) mit "+"
let catName = "Coco";
// console.log(`Hallo ${catName}!`);


// 12. Objekte mit der Literalsyntax anlegen --> nicht mit dem new-Operator oder mit einem Konstruktor
/* Arten ein Objekt zu erzeugen:
a) mit new-Operator: 
let cat = new Object();
cat.name = "Coco";
cat.colour = "grey";
cat.age = 11;
*/ 
// b) mit Konstruktorfunktion: 1 neues Objekt === 1 Instanz von Konstruktor --> gibt Prototypen vor
/*
function Cat(name, colour, age) {
    // this.Eigenschaft und Wert
    this.name = name;
    this.colour = colour;
    this.age = age;
}
*/                                          
// cat1 === neues Objekt Cat
//let cat1 = new Cat("Coco", "grey", 11); // weist Werte hinzu

// c) mit Objektliteral: 
let cat = { 
    name: "Coco", 
    colour: "grey", 
    age: 11 
};


// 13. Arrays mit der Literalsyntax anlegen --> nicht mit dem new-Operator oder mit einem Konstruktor
/*
Arten einen Array zu erzeugen:
a) mit new-Operator:  
let wochentage = new Array();
wochentage[0] = "Montag";
wochentage[1] = "Dienstag";
wochentage[2] = "Mittwoch";
//console.log(wochentage);
*/
// b) mit Konstruktorfunktion: 
/*
let wochentage = new Array("Montag", "Dienstag", "Mittwoch");
oder: 
let wochentage = new Array(3); // arr.length === 3 (3 leere Elemente)
//console.log(wochentage);
*/

// c) mit Arrayliteral: 
let wochentage = [ "Montag", "Dienstag", "Mittwoch" ];


// 14. Spread-Operator, um Arrays zusammenzufügen
const FIRST_SIX_MONTHS_OF_YEAR = ["Januar", "Februar", "März", "April", "Mai", "Juni"];
const LAST_SIX_MONTHS_OF_YEAR = ["Juli", "August", "September", "Oktober", "November", "Dezember"];

//const ALL_SIX_MONTHS_OF_YEAR = FIRST_SIX_MONTHS_OF_YEAR.concat(LAST_SIX_MONTHS_OF_YEAR);
const ALL_SIX_MONTHS_OF_YEAR = [ ...FIRST_SIX_MONTHS_OF_YEAR, ...LAST_SIX_MONTHS_OF_YEAR ];
// console.log(ALL_SIX_MONTHS_OF_YEAR);


// 15. Array aus Unikaten als Set anlegen
let primeNumbersArray = [ 2, 3, 5, 7, 11 ];
let primeNumbers = new Set(primeNumbersArray);

for (let primeNumber of primeNumbers) {
    console.log(primeNumber);
}
