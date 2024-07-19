// Task 8 : Use for-in loop to iterate over object

const book = {
    title: "Geography",
    author: "Majid Husain",
    year: 2005
};

for (let b in book) {
    console.log(`The property is ${b} and it's corresponding value is ${book[b]}`);
}

console.log();

const keys = Object.keys(book);
const values = Object.values(book) 

console.log(keys); // [ 'title', 'author', 'year' ]
console.log(values); // [ 'Geography', 'Majid Husain', 2005 ]