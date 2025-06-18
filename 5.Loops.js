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
  if (i === 3) break;      // stops at 3
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;   // skips 2
  console.log(i);
}
