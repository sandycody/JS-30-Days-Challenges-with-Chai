// Task 1 : Bubble Sort

const bubbleSort = (arr) => {
    let n = arr.length;
    let swap;
    for (let i = 0; i < n - 1; i++) {
        swap = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            }
        }

        if (!swap) {
            break;
        }
    }
    return arr;
}

const arr1 = [45, 23, 1, 76, 54, 30];
console.log(`Before Sorting : [${arr1.join(', ')}]`);

const bubbleSortArray = bubbleSort(arr1);

console.log(`After Sorting : [${bubbleSortArray.join(', ')}]`);

console.log();

// Task 2 : Selection Sort

const selectionSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minPos = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[minPos] > arr[j]) {
                minPos = j;
            }
        }
        // Swap
        [arr[minPos], arr[i]] = [arr[i], arr[minPos]];
    }
    return arr;
}

const arr2 = [34, 12, 10, 45, 62, 51];
console.log(`Before Sorting: [${arr2.join(', ')}]`);

const selectionSortArray = selectionSort(arr2);
console.log(`After Sorting: [${selectionSortArray.join(', ')}]`);

console.log();

// Task 3 : Quick Sort

const quickSort = (arr, low, high) => {
    if (low < high) {
        let pivotIdx = partition(arr, low, high);

        quickSort(arr, low, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, high);
    }
}

const partition = (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
    }

    i++;
    [arr[i], arr[high]] = [arr[high], arr[i]]; // Swap pivot to correct position

    return i;
}

// Example usage:
const arr3 = [12, 19, 5, 1, 7, 2];
let n = arr3.length;
console.log(`Before Sorting : [${arr3.join(', ')}]`);

quickSort(arr3, 0, n - 1);

console.log(`After Sorting : [${arr3.join(', ')}]`);
