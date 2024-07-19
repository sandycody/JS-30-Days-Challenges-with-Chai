// Task 5 : Create Nested Object

const library = {
    name: "Akash",
    books: [
        {
            title: "Chemistry",
            author: "O.P. Tandon",
            year: 1992
        },

        {
            title: "Biology",
            author: "Trueman",
            year: 1995
        },

        {
            title: "Computer Science",
            author: "E. Balagurusamy",
            year: 2000
        }
    ]
};

console.log(library);

console.log();

// Task 6 : Access the properties of library

const libraryName = library.name;
console.log(`The name of library is ${libraryName}`);

console.log();

console.log(`The title of all books are as follows :`)
library.books.map(book => console.log(book.title));
