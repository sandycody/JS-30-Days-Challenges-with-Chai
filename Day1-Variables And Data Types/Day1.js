// Activity 1 : Variable Declaration

/* Task 1 */

var number = 20;
console.log(number); //20

/* Task 2 */

let str = "Dummy String";
console.log(str); //Dummy String


// Activity 2 : Constant Declaration

/* Task 3 */

const bool = false;
console.log(bool); //false

// Activity 3 : Data Types

/* Task 4 */

const num = 20;
const string = "Testing String";
const bl = true;
const obj = {
    name: "Anonymous",
    age: 20,
    interest: "Coding"
};
const arr = [20, 49, 1, 3, 14];

console.log(typeof num); //number
console.log(typeof string); //string
console.log(typeof bl); //boolean
console.log(typeof obj); //object
console.log(typeof arr); //object


// Activity 4: Reassigning Variables

/* Task 5 */
let x = 100;
console.log(x); // 100
x = 30;
console.log(x); // After reassigning, we get 30

// Activity 4: Understanding const

/* Task 6 */

const a = 50;
console.log(50); // 50
a = 10;
console.log(a); // TypeError: Assignment to constant variable. (Immutable nature of const)
