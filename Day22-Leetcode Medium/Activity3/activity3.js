let maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let currentHeight = Math.min(height[left], height[right]);
        let currentWidth = right - left;
        let currentArea = currentHeight * currentWidth;
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};


let heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];


console.log(maxArea(heights)); // Output: 49
