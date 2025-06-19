/*

Create a faulty calculator using JavaScript.

the faulty calculator does following:
1. it takes two numbers as input from the user
2. it performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the time.
*/

/*
Template Literals (String Interpolation):
Within template literals (strings enclosed by backticks `` ` ``), the $ followed by curly braces ${} is used for string interpolation. This allows embedding expressions or variables directly within the string. For example:
    const name = "Alice";
    console.log(`Hello, ${name}!`); // Outputs: "Hello, Alice!"
*/

let random = Math.random() * 100;
console.log(random);

let a = prompt("Enter first number:");
let c = prompt("Enter operation (+, -, *, /):");
let b = prompt("Enter second number:");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
};


if (random > 10) {
    // perform correct operation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
    c = obj[c];
    alert(`the wrong result is ${eval(`${a} ${c} ${b}`)}`)
}
/*
The eval() function in JavaScript is a global function that evaluates or executes a string of JavaScript code.
How it works:
    It takes a single argument, which is a string containing JavaScript code.
    If the string represents an expression, eval() evaluates the expression and returns its value.
    If the string contains one or more JavaScript statements, eval() executes those statements. 

Important Considerations and Risks:
    Security Vulnerabilities:
        eval() executes arbitrary code. If the string passed to eval() comes from an untrusted source (like user input), it can lead to code injection attacks, allowing malicious code to be executed on the user's machine.
    Performance Issues:
        eval() can be slower than directly executing code because it requires the JavaScript engine to parse and compile the string at runtime.
    Debugging Challenges:
        Code executed via eval() can be harder to debug as it doesn't appear in the source code directly.
*/