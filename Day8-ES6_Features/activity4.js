// Task 7 : Default Parameters

const product = (num1, num2 = 1) => {
    return num1 * num2;
}

// With second paramater
console.log(product(12, 5)); // 60

// Without second parameter
console.log(product(12)); // 12