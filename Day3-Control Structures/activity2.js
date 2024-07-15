// Task 3 : To find largest of 3 numbers

const num1 = 45;
const num2 = 78;
const num3 = 21;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(`${num1} is larger than ${num2} and ${num3}`);
    }
} else if (num2 > num1) {
    if (num2 > num3) {
        console.log(`${num2} is larger than ${num1} and ${num3}`);
    }
} else if (num3 > num1) {
    if (num3 > num2) {
        console.log(`${num3} is larger than ${num1} and ${num2}`);
    }
}