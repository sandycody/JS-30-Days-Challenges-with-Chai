// Task 7 : Write a function that memoizes the results of another function. Use closure to store the results of previous computations.


function calcSquareRoot() {
    const cache = {};

    return function getSquareRoot(num) {
        if (cache[num]) return cache[num];
        setTimeout(() => {
            const result = Math.sqrt(num).toFixed(3);
            cache[num] = result;
            console.log(`The square root of ${num} is ${result}`);
        }, 4000);
    }
}

const sqRoot = calcSquareRoot();
sqRoot(3); //It takes 4 seconds to give square root 1.732
sqRoot(3); //After memoizing result in cache it immediately gives the result

console.log();

// Another example of Fibonacci (optional)

function fibonnaci() {
    const memo = {};

    function fib(num) {
        // If result is already cached, return it
        if (num in memo) {
            return memo[num];
        }

        // Base cases for Fibonacci sequence
        if (num <= 2) {
            return 1;
        }

        // Fibonacci number recursively and caching of result
        memo[num] = fib(num - 1) + fib(num - 2);

        return memo[num];
    }

    return fib;
}

const fib = fibonnaci();
const num = 7
console.log(`The ${num}th fibonacci term is ${fib(num)}`); //The 7th fibonacci term is 13


// Task 8 : Create a memoized version of a function that calculates the factorial of a number

function factorial() {
    const memo = { };

    function factNumber(num) {
        if (num in memo) return memo[num];

        if (num < 0) return `not defined`;

        if (num == 0 || num == 1) return 1;

        memo[num] = num * factNumber(num-1);

        return memo[num];
    }
    return factNumber;
}

const fac = factorial();
const number = 6;
console.log(`The factorial of ${number} is ${fac(number)}`);



