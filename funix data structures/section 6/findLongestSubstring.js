function findLongestSubstring(str) {
    let maxLength = 0;
    let start = 0;
    const charMap = {};

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const previousCharIndex = charMap[currentChar];

        if (previousCharIndex >= start) {
            start = previousCharIndex + 1;
        }

        charMap[currentChar] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

console.log(
    findLongestSubstring(""), // 0
    findLongestSubstring("rithmschool"), // 7
    findLongestSubstring("thisisawesome"), // 6
    findLongestSubstring("thecatinthehat"), // 7
    findLongestSubstring("bbbbbb"), // 1
    findLongestSubstring("longestsubstring"), // 8
    findLongestSubstring("thisishowwedoit"), // 6
);
