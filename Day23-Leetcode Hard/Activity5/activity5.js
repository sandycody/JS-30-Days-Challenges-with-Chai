const ladderLength = (beginWord, endWord, wordList) => {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];

    while (queue.length > 0) {
        let [currentWord, level] = queue.shift();

        if (currentWord === endWord) return level;

        for (let i = 0; i < currentWord.length; i++) {
            for (let charCode = 97; charCode < 123; charCode++) {  // 'a' to 'z'
                const nextWord = currentWord.slice(0, i) + String.fromCharCode(charCode) + currentWord.slice(i + 1);

                if (wordSet.has(nextWord)) {
                    queue.push([nextWord, level + 1]);
                    wordSet.delete(nextWord);
                }
            }
        }
    }

    return 0;
};

// Example usage:
const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(`Length of shortest transformation sequence: ${ladderLength(beginWord, endWord, wordList)}`);
