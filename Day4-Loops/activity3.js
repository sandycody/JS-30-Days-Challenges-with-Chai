// Task 5 : Print 1 to 5 using do-while loop

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

// Task 6 : Factorial of number using do-while loop


let number = 5;
let fac = 1, j = 1;

do {
    fac *= j;
    j++;
} while (j <= number);

console.log(`The factorial of ${number} is ${fac}`);