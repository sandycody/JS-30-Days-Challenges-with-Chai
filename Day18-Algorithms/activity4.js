// Task 8 : Write a function to rotate an array with k positions. 

const rotateArray = (arr, k) => {
    let nums = [];
    for (let i = 0; i < arr.length; i++) {
        nums[(i + k) % arr.length] = arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = nums[i];
    }
    return arr;
}

let arr = [23, 14, 10, 43, 54, 39, 98];
let k = 3;
console.log(`Before rotation : [${arr.join(', ')}]`);
console.log(`After rotation : [${rotateArray(arr, k).join(', ')}]`);

console.log();

arr = [1, 2, 3, 4, 5, 6, 7];
k = 2;
console.log(`Before rotation : [${arr.join(', ')}]`);
console.log(`After rotation : [${rotateArray(arr, k).join(', ')}]`);

console.log();

// Task 9 : Write a function to merge two sorted arrays into one sorted array.

const mergedSort = (arr1, arr2) => {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

const arr1 = [30, 45, 67, 78];
const arr2 = [12, 40, 52, 73, 95];

console.log(`Sorted merging of [${arr1.join(', ')}] and [${arr2.join(', ')}] : `);
console.log(mergedSort(arr1, arr2));