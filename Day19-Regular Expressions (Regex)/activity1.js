// Task 1 : Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "Javascript" in a string.)

let regex = /Javascript/g;
const text = "Javascript is a scripting language. Javascript is used in Backend as well as Frontend. Javascript has so many powerful concepts known as async/await, IIFE, HOF";

console.log(text.match(regex));

console.log();

// Task 2 : Write a regular expression to match all digits in a string.

regex = /\d/g;
string = "In the year 2023, a remarkable event occurred in the city of Springfield. The population, which was recorded as 153,294 in the previous census, had risen to 160,450.";
console.log(string.match(regex));