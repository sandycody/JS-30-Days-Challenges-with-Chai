// Task 6 : Write a function to count the occurence of each character in a string.

const characterCount = (str) => {
    let charCount = {};
    for (let ch of str) {
        if (!charCount[ch]) {
            charCount[ch] = 1;
        } else {
            charCount[ch]++;
        }
    }
    return charCount;
}

let string = "Sandeep";
console.log(`The character count of each character of string "${string}" as follows : `);
console.log(characterCount(string));

console.log();

string = "Chai Aur Code";
console.log(`The character count of each character of string "${string}" as follows : `);
console.log(characterCount(string));

console.log();

// Task 7 : Write a function to find the longest substring without repeating characters in a string.

const longestSubstring = (str) => {
    if (str.length < 2) return str.length;
    let start = 0, maxLength = 0, maxSubstring = "";
    const map = {};

    for (let end = 0; end < str.length; end++) {
        const exist = map[str[end]];
        if (exist >= start) {
            start = exist + 1;
        }
        map[str[end]] = end;
        const currentLength = end - start + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxSubstring = str.substring(start, end + 1);
        }
    }
    
    return maxSubstring;
}

string = "pwwkew";
console.log(`The Longest substring without repeating characters : ${longestSubstring(string)}`);
console.log(`The length is : ${longestSubstring(string).length}`);

console.log();

string = "sandeep";
console.log(`The Longest substring without repeating characters : ${longestSubstring(string)}`);
console.log(`The length is : ${longestSubstring(string).length}`);