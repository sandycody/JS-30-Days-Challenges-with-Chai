// Task 1 : Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(num) {
    if (num < 0) return `Not Defined`;

    if (num === 0 || num === 1) return 1;

    return num * factorial(num-1);

}

const number1 = 0;
console.log(`The factorial of ${number1} is ${factorial(number1)}`);

const number2 = -5;
console.log(`The factorial of ${number2} is ${factorial(number2)}`);

const number3 = 3;
console.log(`The factorial of ${number3} is ${factorial(number3)}`);

console.log();

// Task 2 : Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.


function fibonacci(nTerm) {
    if (nTerm <= 1) return nTerm;

    return fibonacci(nTerm - 1) + fibonacci(nTerm - 2);
}

console.log(`The 0th term of fibonacci series is ${fibonacci(0)}`);

console.log(`The 1st term of fibonacci series is ${fibonacci(1)}`);

console.log(`The 2nd term of fibonacci series is ${fibonacci(2)}`);

console.log(`The 3rd term of fibonacci series is ${fibonacci(3)}`);

console.log(`The 4th term of fibonacci series is ${fibonacci(4)}`);

console.log(`The 5th term of fibonacci series is ${fibonacci(5)}`);

console.log(`The 6th term of fibonacci series is ${fibonacci(6)}`);

