// Task 1 : Check number is even or odd

function isEvenOrOdd(num) {
    if (num % 2 == 0) {
        console.log(`${num} is Even number`);
    } else {
        console.log(`${num} is Odd number`);
    }
}

const number = 69;
isEvenOrOdd(number);


// Task 2 : Calculate the square of number 

function square(num) {
    return num * num;
}

const n = 20;
console.log(`The square of ${n} is ${square(n)}`);