// Task 3 : Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumElemArray(arr, index) {
    if (index === 0) return arr[index];

    return arr[index] + sumElemArray(arr, index-1);
}

const arr1 = [1, 2, 3, 4, 5, 6];
console.log(`The sum of array elements is : ${sumElemArray(arr1, arr1.length - 1)}`);

const arr2 = [10, 20, 30];
console.log(`The sum of array elements is : ${sumElemArray(arr2, arr2.length - 1)}`);

const arr3 = [25, 50, 100, 150];
console.log(`The sum of array elements is : ${sumElemArray(arr3, arr3.length - 1)}`);


// Test 4 : Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxElem(arr, index) {
    if (index == 0) return arr[0];

    return Math.max(arr[index], maxElem(arr, index-1));
}

const array1 = [5, 2, 10, 7];
console.log(`The maximum element among ${array1.join(', ')} is: ${maxElem(array1, array1.length-1)}`);

console.log();

const array2 = [54, 22, 56, 17, 30];
console.log(`The maximum element among ${array2.join(', ')} is: ${maxElem(array2, array2.length-1)}`);