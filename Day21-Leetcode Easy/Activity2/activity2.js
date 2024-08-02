let reverseInteger = (num) => {
    let sign = num < 0 ? -1 : 1;
    let n = Math.abs(num), reverse = 0;

    while (n !== 0) {
        const rem = n % 10;
        n = Math.floor(n / 10);
        reverse = (reverse * 10) + rem;
    }
    return sign * reverse;
}

let num = 2314;
console.log(`The reverse of ${num} is : ${reverseInteger(num)}`);

num = 6890;
console.log(`The reverse of ${num} is : ${reverseInteger(num)}`);

num = -56;
console.log(`The reverse of ${num} is : ${reverseInteger(num)}`);