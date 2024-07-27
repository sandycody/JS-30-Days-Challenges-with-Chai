// Task 5 : Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

const arr = [];

for (let i = 0; i <= 10; i++) {
    arr.push(function() {
        return function() {
            console.log(`Function ${i+1} index is ${i}`);
        }
    })
}

arr.map(func => func()());