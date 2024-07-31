// Task 10 : Write a function to solve the fibonacci sequence using Dynamic Programming.

const fibonacciSequence = (n) => {
    if (n <= 1) return n;

    const fib = [0, 1] // Base cases

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib;
}

let num = 5;
console.log(`Fibonacci series upto ${num} terms : ${fibonacciSequence(num-1).join(' ')}`);

console.log();

num = 10;
console.log(`Fibonacci series upto ${num} terms : ${fibonacciSequence(num-1).join(' ')}`);