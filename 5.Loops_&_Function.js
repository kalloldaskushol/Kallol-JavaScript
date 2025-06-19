for (let i = 0; i < 5; i++) {
    console.log("HELLO from for loop, i =", i);
}

let i = 0;
while (i < 5) {
    console.log("HELLO from while loop, i =", i);
    i++;
}
i = 0;
do {
    console.log("HELLO from do-while loop, i =", i);
    i++;
} while (i < 5);

// for ... of loop
// used to loop over array or strings
let fruits = ["Apple", "Banana", "Mango"]; // array
for (let i of fruits) {
    console.log(i);
}
// it is used to print all the element in an array.
// for ... in loop
let person = {
    name: "Kallol",
    age: 22,
    surname: "DAS",
};
for (key in person) {
    console.log(key, person[key]);
}
// it is used to print all the element in an object.

for (let i = 0; i < 5; i++) {
    if (i === 3) break; // stops at 3
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // skips 2
    console.log(i);
}

// Function
function nice(name) {
    console.log("Hey" + "name" + "You are Nice");
    console.log("Hey" + "name" + "You are Good");
}
function sum(a, b, c = 3) {
    console.log(a, b, c);
    return a + b + c;
}

result = sum(3, 2);
result1 = sum(7, 5, 5);
console.log("The sum of number is =", result);
console.log("The sum of number is =", result1);

const func1 = (x) => {
    console.log("i am an arrow function", x);
};

func1(35);
func1(54);
