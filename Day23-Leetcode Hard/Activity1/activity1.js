let findMedianSortedArrays = function (nums1, nums2) {
    let mergedArray = [...nums1, ...nums2];

    mergedArray.sort((a, b) => a - b);

    let length = mergedArray.length;
    let mid = Math.floor(length / 2);

    if (length % 2 === 0) return (mergedArray[mid - 1] + mergedArray[mid]) / 2;

    else return mergedArray[mid];
};

let arr1 = [2, 5, 9];
let arr2 = [4, 7, 11];

console.log(`The median of [${arr1}] and [${arr2}] is : ${findMedianSortedArrays(arr1, arr2)}`);