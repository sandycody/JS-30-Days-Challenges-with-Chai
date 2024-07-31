// Task 4 : Linear Search

const linearSearch = (arr, target) => {
    for (let i in arr) {
        if (arr[i] === target) return i;
    }
    return -1;
}

let arr = [23, 14, 43, 50, 99];
let target = 43; 
console.log(`Element ${target} found at position ${linearSearch(arr, target)}`);

console.log();

arr = [54, 39, 74, 1, 29];
target = 29; 
console.log(`Element ${target} found at position ${linearSearch(arr, target)}`);

console.log();

arr = [54, 39, 74, 1, 29];
target = 100; 
console.log(`Element ${target} found at position ${linearSearch(arr, target)}`);

console.log();

// Task 5 : Binary Search

const binarySearch = (arr, target) => {
    let low = 0, high = arr.length-1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

arr = [2, 3, 10, 32, 100];
target = 2;
console.log(`Element ${target} found at position ${binarySearch(arr, target)}`);

target = 32;
console.log(`Element ${target} found at position ${binarySearch(arr, target)}`);