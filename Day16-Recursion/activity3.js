// Task 5 : Write a recursive function to reverse a string.

function stringReversal(str, charIndex) {
    if (charIndex == 0) return str.charAt(charIndex);

    return str.charAt(charIndex) + stringReversal(str, charIndex-1);
}

const str = "devil";
console.log(`The reversal of "${str}" is => "${stringReversal(str, str.length - 1) }"`);

const str2 = "madam";
console.log(`The reversal of "${str2}" is => "${stringReversal(str2, str2.length - 1) }"`);

const str3 = "sandeep";
console.log(`The reversal of "${str3}" is => "${stringReversal(str3, str3.length - 1) }"`);

console.log();

// Task 6 : Write a recursive function to check if a string is a palindrome or not.

function isPalindrome(str) {
    if (str === stringReversal(str, str.length-1)) {
        return "Palindrome String";
    } else {
        return "Not a Palindrome String";
    }
}

const string1 = "level";
console.log(`"${string1}" is a ${isPalindrome(string1)}`);

const string2 = "javascript";
console.log(`"${string2}" is a ${isPalindrome(string2)}`);

const string3 = "trail";
console.log(`"${string3}" is a ${isPalindrome(string3)}`);

const string4 = "abbcbba";
console.log(`"${string4}" is a ${isPalindrome(string4)}`);

