/*
🔥A fragment of code that produces a value is called an expression.
Every value written literally is an expression. for example, 1, 2, 3, "Hello", true, false, null, undefined, etc.

🔥Arithmetic operators:
    + addition
    - subtraction
    * multiplication
    / division
    % modulo
    ** exponentiation ⭐

🔥Assignment Operator:
    = assignment -> x=y
    += addition assignment -> x += y (equivalent to x = x + y)
    -= subtraction assignment -> x -= y (equivalent to x = x - y)
    *= multiplication assignment -> x *= y (equivalent to x = x * y)
    /= division assignment -> x /= y (equivalent to x = x / y)
    %= modulo assignment -> x %= y (equivalent to x = x % y)
    **= exponentiation assignment ⭐ -> x **= y (equivalent to x = x ** y)

🔥Comparision Operator:
    📌== equal to
        example: 1 == "1" is true because it only checks the value, not the type (number vs string)
        example: 1 == 1 is true because both values are the same (number vs number)

    📌!= not equal to
    📌=== equal value and type ⭐⭐⭐
        example: 1 === "1" is false because the type is different (number vs string)

    📌!== not equal value or not equal type ⭐⭐⭐
        example: 1 !== "1" is true because the type is different (number vs string)

    > greater than
    < less than
    >= greater than or equal to
    <= less than or equal to

    🔥Logical Operators:
    📌&& logical AND
        example: true && true is true
        example: true && false is false
        example: false && false is false
    📌|| logical OR
        example: true || true is true
        example: true || false is true
        example: false || false is false
    📌! logical NOT
        example: !true is false
        example: !false is true
        //example: !0 is true (0 is falsy)
*/

let age = 10;
let grace = 2;

console.log(age + grace); // outputs: 12
console.log(age - grace); // outputs: 8
console.log(age * grace); // outputs: 20
console.log(age / grace); // outputs: 5
console.log(age % grace); // outputs: 0
console.log(age ** grace); // outputs: 100


// if else ladder:
if (age >= 18) {
    console.log("Adult");
} else if (age < 18  && age >= 13) {
    console.log("Minor");
} else if (age < 13) {
    console.log("Child");
} else {
    console.log("sorry your age does not match any category");
}

// Ternary operator:
/*
SYNTEX:
condition ? expressionIfTrue : expressionIfFalse;

*/