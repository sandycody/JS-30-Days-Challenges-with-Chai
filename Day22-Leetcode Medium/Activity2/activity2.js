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