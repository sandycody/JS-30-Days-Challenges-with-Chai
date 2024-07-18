// Task 10 : for-loop to iterate over array

const arr = [34, 50, 10, 2, 87];

for (let i = 0; i < arr.length; i++) {
    console.log(`Index ${i} element is ${arr[i]}`);
}

console.log();

// Task 11 : forEach method to iterate over array

const another_array = [20, 1, 3, 5, 10];

another_array.forEach((elem, index) => {
    console.log(`Index : ${index}, Element : ${elem}`);
});