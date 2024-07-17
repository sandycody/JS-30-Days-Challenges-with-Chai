/* 
Note : 
    In JavaScript, a function is not a “magical language structure”, but a special kind of value.

    The syntax that we used before is called a Function Declaration:

    function sayHi() {
        alert( "Hello" );
    }

    There is another syntax for creating a function that is called a Function Expression.

    It allows us to create a new function in the middle of any expression.

    For example:

    let sayHi = function() {
        alert( "Hello" );
    };

    Here we can see a variable sayHi getting a value, the new function, created as function() { alert("Hello"); }.

    As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.
*/

// Task 3 : Find max of 2 numbers using Function Expression

const maxOfTwo = function (a, b) {
    if (a > b) {
        console.log(`The maxiumum of ${num1} and ${num2} is ${a}`);
    } else {
        console.log(`The maxiumum of ${num1} and ${num2} is ${b}`);
    }
}

const num1 = 20, num2 = 85;

maxOfTwo(num1, num2);

// Task 4 : Concatenation of 2 strings

const concatStrings = function (str1, str2) {
    return str1.concat(str2);
}

const str1 = "Sandeep ";
const str2 = "Wadhawan.";

console.log(concatStrings(str1, str2));