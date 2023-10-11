console.log("I'm ready")

// Iteration 1: Names and Input
let hacker1 = "Juan";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Antonio";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
 if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
 }

else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}

else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loops
// 3.1
let nombre = "John";
let nombreCap = '';


for (let i = 0; i < nombre.length; i++) {
  
  nombreCap += nombre[i].toUpperCase();

  
  if (i < nombre.length - 1) {
    nombreCap += ' ';
  }
}

console.log(nombreCap);

// 3.2
let nombreRev = '';


for (let i = nombre.length - 1; i >= 0; i--) {
  
  nombreRev += nombre[i];
  }


console.log(nombreRev);

// 3.3

if ("hacker1" > "hacker2") {
    console.log("The driver's name goes first.")
}

else if ("hacker1" < "hacker2"){
    console.log("Yo, the navigator goes first definitely.")
}

else {
    console.log("What?! You both have the same name?")
}