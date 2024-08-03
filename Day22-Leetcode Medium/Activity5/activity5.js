const groupAnagram = (stringArr) => {
    const map = new Map();
    for (let str of stringArr) {
        const sortedString = str.split('').sort().join('');

        if (!map.has(sortedString)) map.set(sortedString, []);

        map.get(sortedString).push(str);
    }
    return Array.from(map.values());
};

let stringArr = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagram(stringArr));

console.log();

stringArr = ["abc", "bca", "cab", "abd", "bad", "dab", "acd"];
console.log(groupAnagram(stringArr));

console.log();

stringArr = [""];
console.log(groupAnagram(stringArr));
