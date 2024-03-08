/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("-Esercizio 1-")
const pets = ["dog", "cat", "hamster", "redfish"]
for (i = 0; i < pets.length; i++) {
  console.log(pets[i])
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("-Esercizio 2-")
console.log(pets.sort())
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("-Esercizio 3-")
pets.reverse()
for (i = 0; i < pets.length; i++) {
  console.log(pets[i])
}
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/ console.log("-Esercizio 4-")
console.log(pets)
pets.push(pets[0])
pets.splice(0, 1)
console.log(pets)
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà 
    "licensePlate" con valore a tua scelta.
*/ console.log("-Esercizio 5-")
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
]
for (i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "1"
}
console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", 
    rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/ console.log("-Esercizio 6-")
const newCar = {
  brand: "Ferrari",
  model: "F40",
  color: "red",
  trims: ["highSpeed", "luxury"],
  licensePlate: "1",
}
if (
  newCar.brand &&
  newCar.model &&
  newCar.color &&
  newCar.trims &&
  newCar.licensePlate
) {
  cars.push(newCar)
}
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop()
}
console.log(cars)
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo 
    array "justTrims", sotto definito.
*/ console.log("-Esercizio 7-")
const justTrims = []
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. 
    Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/ console.log("-Esercizio 8-")
for (let g = 0; g < cars.length; g++) {
  if (cars[g].color[0] === "b") {
    console.log(cars[g].color, "Fizz")
  } else {
    console.log(cars[g].color, "Buzz")
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino 
    al raggiungimento del numero 32.
*/ console.log("-Esercizio 9-")
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let x = 0
while (x < numericArray.length) {
  if (numericArray[x] === 32) {
    break
  }
  console.log(numericArray[x])
  x++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array 
    composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/ console.log("-Esercizio 10-")
const charactersArray = ["g", "n", "u", "z", "d"]
let numbers = []

for (let p = 0; p < charactersArray.length; p++) {
  switch (charactersArray[p]) {
    case "a":
      numbers.push("1")
      break
    case "b":
      numbers.push("2")
      break
    case "c":
      numbers.push("3")
      break
    case "d":
      numbers.push("4")
      break
    case "e":
      numbers.push("5")
      break
    case "f":
      numbers.push("6")
      break
    case "g":
      numbers.push("7")
      break
    case "h":
      numbers.push("8")
      break
    case "i":
      numbers.push("9")
      break
    case "j":
      numbers.push("10")
      break
    case "k":
      numbers.push("11")
      break
    case "l":
      numbers.push("12")
      break
    case "m":
      numbers.push("13")
      break
    case "n":
      numbers.push("14")
      break
    case "o":
      numbers.push("15")
      break
    case "p":
      numbers.push("16")
      break
    case "q":
      numbers.push("17")
      break
    case "r":
      numbers.push("18")
      break
    case "s":
      numbers.push("19")
      break
    case "t":
      numbers.push("20")
      break
    case "u":
      numbers.push("21")
      break
    case "v":
      numbers.push("22")
      break
    case "w":
      numbers.push("23")
      break
    case "x":
      numbers.push("24")
      break
    case "y":
      numbers.push("25")
      break
    case "z":
      numbers.push("26")
      break
    default:
      console.log(charactersArray[p], "Devi inserire una lettera!!")
  }
}
console.log(numbers)
