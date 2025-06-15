console.log("H K");

/*
🔥Variable:
    📌The value of the variable can be changed during the EXECUTION of the program;
    📌SYNTEX:
        var a = 7; 
        here, a is an identifer and 7 is a literal 

    📌Difference between let and var:
        1. var is globally scoped while let & const are block scoped.⭐⭐⭐

        2. var can be updated & re-declared within its scope
            var name = "Alice";
            var name = "Bob";  // ✅ Re-declared, no error
            name = "Charlie";  // ✅ Updated

        3. let can be updated but not re-declared
            let age = 25;
            age = 30;       // ✅ Updated

            let age = 35;   // ❌ Error! Cannot re-declare 'age' in the same scope

        4. const can neither be updated nor be re-declared.
        
        5. var variables are initialized with undefinned whereas let and const variables aare not initialized.
            When you declare a variable with var, JavaScript gives it a default value of undefined at the beginning (before the line where it's declared runs).

            But with let and const, JavaScript does not initialize them, so if you try to use them before declaration, you’ll get an error.
            
            console.log(a);  // ✅ Outputs: undefined
            var a = 10;

            console.log(b);  // ❌ Error: Cannot access 'b' before initialization
            let b = 20;

            console.log(c);  // ❌ Error: Cannot access 'c' before initialization
            const c = 30;

        6. const must be initialized during declaration unlike let and var.

🔥Primitive Data types:
    📌 Primitive data types are the basic building blocks of data in JavaScript. They store simple, single values, not complex objects.
    
    | Data Type | Example Value   | Description                 |
    | --------- | --------------- | --------------------------- |
    | String    | `"Hello"`       | Text                        |
    | Number    | `42`, `3.14`    | Numbers                     |
    | Boolean   | `true`, `false` | True/False                  |
    | Undefined | `undefined`     | Declared but no value       |
    | Null      | `null`          | Empty or unknown value      |
    | Symbol    | `Symbol("id")`  | Unique value (advanced use) |
    | BigInt    | `123... n`      | Very large numbers          |

🔥Object: 
    📌An object in JavaScript is a non-primitive data type. It can store multiple values as key-value pairs.
    📌An object is a collection of properties where each property has a key (string) and a value (can be any data type).
    
        SYNTAX:
            let person = {
                name : "Kallol Das Kushol" ,
                age : 21,
                isStudent : true
            };
            here, name is a key and "Kallol Das Kushol" is its value.

            console.log(person.name); // outputs: Kallol Das Kushol
            console.log(person.age);  // outputs: 21
            console.log(person.isStudent); // outputs: true
            console.log(person); 
                // outputs: { name: 'Kallol Das Kushol', age: 21, isStudent: true }

            📌New property can be added and existing values can be changed in objects.
                person.city = "Dhaka"; // Adding new property
                person.age = 22; // Changing existing value

*/

var a = 7;
a = a + 1;
console.log(a); // outputs: 8

let b = 10;
let c = "Kallol Das Kushol";

{
    // if we use var then the change will be globally.
    let a = 10000; // block scoped variable
    console.log("inside block a for using 'let' =", a); // outputs: 10000 (block scoped variable)
    console.log(b); // outputs: 10 (b is still accessible here)
}
console.log("outside block a =", a); // outputs: 8
console.log(b); // outputs: 10 (b is still accessible here)

let x = "Kallol Das Kushol"; //string
let y = 22; //number
let z = 3.55; //number
let p = true; //boolean
let q = undefined; //undefined
let r = null; //object ⭐⭐⭐

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);
/*
null is a primitive value (like string, number, boolean).
But typeof null gives "object" due to this historical bug.

    | Check         | Output     | Meaning                           |
    | ------------- | ---------- | -------------------------------   |
    | `typeof null` | `"object"` | ❌ Bug in JavaScript             |
    | `x === null`  | `true`     | ✅ Correct way to check for null |

*/

let student = {
    name: "kallol das kushol",
    age: 21,
    isStudent: true,
};
console.log(student.name); // outputs: kallol das kushol

console.log(student);

student.age = 22; // changing existing value
student.city = "Dhaka"; // adding new property
console.log(student);
