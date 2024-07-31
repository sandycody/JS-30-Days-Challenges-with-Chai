// Task 7 : Write a regular expression to match a word only if it is at the beginning of a string.

const text = "Today got the task of Regular Expression";

let regex = /^\w+/g;

console.log(text.match(regex)); // [ 'Today' ]

console.log();

// Task 8 : Write a regular expression to match a word only if it is at the end of a string.

regex = /\w+$/g;
console.log(text.match(regex)); // [ 'Expression' ]