// Task 5 : Sum of 2 numbers

const sum = (num1, num2) => {
    return num1 + num2;
}

const num1 = 20;
const num2 = 90;

console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);

// Task 6 : Check string contains a specific character or not

const containChar = (ch, str) => {
    if (str.includes(ch)) return true;
    return false;
}

const string = "Javascript is a very good language";
const ch = "x";

console.log(`Does "${string}" contains character '${ch}'?`);
console.log(`Answer is ${containChar(ch, string)}`);