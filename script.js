// let name = "Damaris";
// console.log(name);
// let age = 15;
// console.log(age);
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(15 % 4);
let isRaining = false;
console.log(isRaining);
let x = 15;
console.log(typeof x);
let d = "Damaris";
console.log(typeof d);
//prompt a user to enter a number
//check if the number is even or odd
//display that the number the user entered is even or odd
let number = prompt("Enter a number")
if (number % 2 == 0){
    alert(`${number} is even`)
    console.log(`${number} is even`)
} else{
    alert(`${number} is odd`)
    console.log(`${number} is odd`)
}


let name = prompt("Enter your name")
let age = prompt("Enter your age")
if (age >= 18){
    alert(`Hi ${name} you are ${age}years old hence you can sign up for tiktok`)
    console.log(`Hi ${name} you are ${age}years old hence you can sign up for tiktok`)
} else{
    alert(`Hi ${name} , you are ${age}years old hence you can't sign up for tiktok`)
    console.log(`Hi ${name} , you are ${age}years old hence you can't sign up for tiktok`)
};
