let isPalindrome = (num) => {
    if (num < 0) return false;

    let n = num, reverse = 0;
    while (n !== 0) {
        const rem = n % 10;
        n = Math.floor(n / 10);
        reverse = (reverse * 10) + rem;
    }

    if (num === reverse) return true;

    return false;
}

let num = 323323;
if (isPalindrome(num)) {
    console.log(`${num} is a palindrome number`);
} else {
    console.log(`${num} is not a palindrome number`);
}

num = -323;
if (isPalindrome(num)) {
    console.log(`${num} is a palindrome number`);
} else {
    console.log(`${num} is not a palindrome number`);
}
