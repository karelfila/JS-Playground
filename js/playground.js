/*
let firstNumber = 5;
let secondNumber = 2;

let summary = firstNumber + secondNumber;
let differential = firstNumber - secondNumber;
let modulo = firstNumber % secondNumber;
let product = firstNumber * secondNumber;
let quotient = firstNumber / secondNumber;

console.log("Součet: " + summary + ", Rozdín: " + differential + ", Modulo: " + modulo + ", Součin: " + product + ", Podíl: " + quotient);

let text = "Typescript Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

text = text.replace("Typescript", "Javascript");
text = text.replaceAll(" ", "");
doesStartWithJS = text.startsWith("Javascript");

console.log("this text: " + "'" + text + "'" + "\n" + doesStartWithJS + "ly starts with the word Javascript");





let operace = '+'
let a = 10;
let b = 5;
let c;

switch (operace) {

   case '+':
       c = a + b;
       break;

   case '-':
       c = a - b;
       break;

   case '*':
       c = a * b;
       break;

   case '/':
       c = a / b;
       break;

   case '%':
       c = a % b;
       break;
}

let isNegative = c < 0 ? "The number is negative" : "The number is positive";  //Ternární operátor

for (let i = 1; i < 9; i++) {
   console.log("Mám rád JS po " + i + "!")
}

let nameBackwards = "";

for (let counter = 0; counter < 3; counter++) {

   for (let i = 4; i > -1; i--) {
       let name = "karel";
       nameBackwards = nameBackwards + name[i]
   }
   console.log(nameBackwards)
   nameBackwards = "";
}

const nakup = ['chleba','mkéko', 'sýr', 'nudle', 'káva'];

console.log(nakup.length)


console.log("---------------------")

let numbers = [3, 5, 7, 8, 11, 12, 13, 16, 17, 18];

for (let i = 0; i < numbers.length; i++) {

   if(numbers[i] % 2 === 0) {
       console.log(numbers[i] + " je sudé číslo")
   }

}

let name = "Karel Fíla";

let names = name.split(" ");

for (let i = 0; i < names.length; i++) {

   console.log(names[i].charAt(0));

}

console.log("---------------------")

function makeLunch() {
   console.log("🍕");
   return "🍕";
}

makeLunch();
makeLunch();

console.log("---------------------")


function minToSec(n) {
   return n * 60;
}

console.log(minToSec(3))



function aZaroven(a, b) {
   if (a === true && b === true) {
       return true;
   } else {
       return false;
   }
}

console.log(aZaroven(true, false));


function obsah(x, y) {

   if (x <= 0 || y <= 0) {
       return -1;
   } else {
       return x * y;
   }

}

console.log(obsah(3, -3));



//Arrow Funkce
const makeLunch = () => {
    return "🍕";
}


const zoo = ["Lev", "Opice", "Tigr"]

zoo.forEach((zvire) => console.log(zvire))
*/

let vek = 15;
let plnoletost = vek < 18 ? "neplnoletý" : "plnoletý";  //Ternární operátor
console.log(plnoletost)