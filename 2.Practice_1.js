//1. Create a variable of type string and try to add a number to it.

//2. Use the `typeof` operator to check the type of the string variable.

//3. Create a const object in javaScript, Can u change it to hold a number later?

//4. try to add a new key to the const object in problem 3, were you able to do it?

//5. Write a JS program to create a word-meaning dictionary of 5 words.

// solve of 1
let myString = "Hello";
myString = myString + 123; // add a number to the string
console.log(myString); // outputs: Hello123

/*
JavaScript allows concatenation of strings and numbers, converting the number to a string.
*/

// solve of 2
console.log(typeof myString); // outputs: string

// solve of 3
const person = {
    age: 21,
};
/*
person = 22; // This will throw an error because we cannot reassign a const variable. if it was let then it would be allowed.
// However, we can change the properties of the object.
person.age = 22; // This is allowed because we are not reassigning the const variable;
*/

// solve of 4
person.city = "Sylhet"; // This is allowed because we are adding a new property to the object.
console.log(person); // outputs: { age: 21, city: 'Sylhet' }
// we can change the properties of a const object, but you cannot reassign the whole object.

// solve of 5
let distionary = {
    apple: "A fruit that is red or green",
    banana: "A long yellow fruit",
    cherry: "A small round fruit that is red or black",
    blueberry: "A small blue fruit that grows in clusters",
    jackfruit:
        "A large fruit with a spiky exterior and sweet, fibrous interior",
};

// console.log(distionary); outputs: whole dictionary object

// Example of accessing dictionary values
console.log("Meaning of apple:", distionary.apple); // outputs a single value.