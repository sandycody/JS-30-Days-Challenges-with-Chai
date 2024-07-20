// Task 3 : Array destructuring 

const arr = [23, 14, 1, 67, 59, 41];

const [ firstElem, ...rest ] = arr;

const lastElem = rest[rest.length - 1];;

console.log(`The first element of array is ${firstElem}`); // 23
console.log(`The last element of array is ${lastElem}`); // 41

console.log();

// Task 4 : Object destructuring

const book = {
    title: "Computer Networks",
    author: "Behrouz A. Forouzan"
}

const { title, author } = book;

console.log(`The title of book is ${title}`);
console.log(`The author of book is ${author}`);