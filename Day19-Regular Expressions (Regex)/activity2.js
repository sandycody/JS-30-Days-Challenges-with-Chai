// Task 3 : Write a regular expression to match all words in a string that start with a captial letter.

let regex = /[A-Z][A-Za-z]+/g;
let text = "Learning Javascript is a very good thing. It will teach us that how to write code in backend as well as frontend. ECMAScript is best known as a Javascript standard."

console.log(text.match(regex));

console.log();

// Task 4 : Write a regular expression to match all sequences of one or more digits in a string.

regex = /\d+/g;
text = "In 2024, there will be 3 major events. The first event is on January 14, the second one is on March 25, and the last one is on November 30. Tickets for the events cost 50, 75, and 100 dollars respectively.";

console.log(text.match(regex));
