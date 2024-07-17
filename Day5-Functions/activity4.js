// Task 7 : Product of 2 numbers with default parameter

function product(num1, num2 = 60) {
    return num1 * num2;
}

const num1 = 4;
console.log(product(num1)); // 240


// Task 8 : Function that takes name, age

function greet(name, age = 20) {
    return `Hello ${name}. A very good morning to you. You are just of ${age} years. Nice!!`;
}

console.log(greet("Tegi"));
