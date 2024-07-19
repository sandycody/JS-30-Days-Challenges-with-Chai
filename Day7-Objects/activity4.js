// Task 7 : Adding getMethod in book object

const book = {
    title: "English Literature",
    author: "William Shakespeare",
    year: 1600
};

book.getBookProps = function () {
    return `Book Title: ${this.title} and Year: ${this.year}`;
}

console.log(book.getBookProps());  