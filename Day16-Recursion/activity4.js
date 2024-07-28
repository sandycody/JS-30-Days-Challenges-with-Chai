// Task 7 : Write a recursive function to perform a binary search on a sorted array.

function binarySearch(arr, elem, low = 0, high = arr.length - 1) {

    const mid = Math.floor(low + (high - low) / 2);

    if (low > high) return -1;

    if (arr[mid] === elem) return mid;

    else if (arr[mid] < elem) {
        return binarySearch(arr, elem, mid + 1, high);
    }

    else return binarySearch(arr, elem, low, mid - 1);
}

const arr = [15, 24, 31, 48, 73, 97];
const elem1 = 48;
console.log(`Element ${elem1} found at index ${binarySearch(arr, elem1)}`);

const elem2 = 15;
console.log(`Element ${elem2} found at index ${binarySearch(arr, elem2)}`);

const elem3 = 80;
console.log(`Element ${elem3} found at index ${binarySearch(arr, elem3)}`);

console.log();

// Task 8 : Write a recursive function to count the occurences of a target element in an array. 

function countOccurrence(arr, target) {
    if (arr.length === 0) return 0;

    let count = 0;
    if (arr[0] === target) count++;
    else count = 0;

    return count + countOccurrence(arr.slice(1), target);
}

const array = [32, 12, 34, 12, 54, 32, 12, 10];
const target1 = 12;

console.log(`The occurrence of ${target1} in ${array.join(", ")} is ${countOccurrence(array, target1)}`);


const target2 = 32;

console.log(`The occurrence of ${target2} in ${array.join(", ")} is ${countOccurrence(array, target2)}`);