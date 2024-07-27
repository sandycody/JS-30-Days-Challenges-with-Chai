// Task 1 : Write a function that returns another function, where inner function accesses a variable from outer function's scope. Call the inner function and log the result.

function outer() {
    let x = 34;
    return function inner() {
        console.log(`Inner value is ${x}`);
    }
}

outer()(); // Inner Value is 34


// Task 2 : Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function counter() {
    let counter = 0;

    function incrementCounter() {
        count++;
    }

    function getCounter() {
        console.log(`The current value of counter is ${counter}`);
    }

    return { incrementCounter, getCounter };
}

const count = counter();

count.incrementCounter();
count.getCounter(); // The current value of counter is 1

count.incrementCounter();
count.getCounter(); // The current value of counter is 2

count.incrementCounter();
count.getCounter(); // The current value of counter is 3