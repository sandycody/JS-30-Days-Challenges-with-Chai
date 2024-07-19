// Task 3 : Add getMethod 

const book = {
    title: "Physics",
    author: "HC Verma",
    year: 1985
};

book.getBookProps = () => {
    return `Title => ${book.title}, Author => ${book.author}`;
}

console.log(book.getBookProps());

console.log();


// Task 4 : Add setMethod

book.updateBookYear = (updatedYear) => {
    if (book.year !== updatedYear) book.year = updatedYear;
}

console.log(`The original book object is: `);
console.log(book);

console.log();

const year = 2001;
book.updateBookYear(year);

console.log(`The updated book object is: `);
console.log(book);



