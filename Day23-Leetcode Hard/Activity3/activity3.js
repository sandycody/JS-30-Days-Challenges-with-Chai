let trap = function (height) {
    let len = height.length;
    if (len === 0) return 0; // edge case for empty height array

    let left = new Array(len).fill(0);
    let right = new Array(len).fill(0);

    left[0] = height[0];
    for (let i = 1; i < len; i++) {
        left[i] = Math.max(left[i - 1], height[i]);
    }

    right[len - 1] = height[len - 1];
    for (let i = len - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], height[i]);
    }

    let result = 0;
    for (let i = 0; i < len; i++) {
        result += Math.min(left[i], right[i]) - height[i];
    }

    return result;
};


let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height)); 
