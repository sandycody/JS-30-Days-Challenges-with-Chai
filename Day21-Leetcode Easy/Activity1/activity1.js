/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
    let arr = [];

    let map = new Map();

    nums.map((elem, index) => {
        if (map.has(target - elem)) {
            arr[0] = map.get(target - elem);
            arr[1] = index;
        }
        map.set(elem, index);
    });
    return arr;
};

let nums = [3, 1, 5, 7, 20];
let target = 10;

console.log(`Indices of ${target} sum are : [${twoSum(nums, target).join(', ')}]`); // [0, 3]

target = 27;
console.log(`Indices of ${target} sum are : [${twoSum(nums, target).join(', ')}]`); // [3, 4]
