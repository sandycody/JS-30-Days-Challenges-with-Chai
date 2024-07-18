// Task 7 : Use map() method to create new array

const original_array = [5, 10, 15, 20];

const new_array = original_array.map(elem => elem * 2);

console.log(new_array); // [ 10, 20, 30, 40 ]

console.log();

// Task 8 : Use filter() method

const filtered_array = new_array.filter(elem => elem % 2 == 0);
console.log(filtered_array);

console.log();

// Task 9 : Use reduce() method

const reduced_array = original_array.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(`The sum of array [${original_array}] is ${reduced_array}`);
