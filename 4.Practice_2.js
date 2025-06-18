// 1. Use logical operators to find whether the age of a person lies between 10 and 20?

let age = 15;
if (age >= 10 && age <= 20) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}
// 2. Demostrate the use of switch case statements in JavaScript.
/*
switch (expression) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}
expression is evaluated once.

It compares expression with each case using strict equality (===).

break is used to exit the switch. If you skip break, it continues to the next case (called “fall-through”).

default is optional; it runs if no case matches. 
*/

// 3. Write a JavaScript Program to find weather a number is Divisible by 2 and 3?

let num = 6;
if (num % 2 == 0 && num % 3 == 0) {
    console.log("YES");
} else {
    console.log("NO");
}
// 4. Write a JavaScript program to find whether a number is Divisible by either 2 or 3?

let num1 = 5;
if (num1 % 2 == 0 || num1 % 3 == 0) {
    console.log("YES");
} else {
    console.log("NO");
}
// 5. Print "You can Drive" or "You cannot Drive" based on the age of a person being greather than 18 using ternary operator.
age > 18 ? console.log("You can drive") : console.log("You can't drive");
