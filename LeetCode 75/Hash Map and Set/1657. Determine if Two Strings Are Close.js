function closeStrings(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    const freqCount1 = new Map();
    const freqCount2 = new Map();

    // Count frequencies of characters in word1 and word2
    for (let char of word1) {
        freqCount1.set(char, (freqCount1.get(char) || 0) + 1);
    }
    for (let char of word2) {
        freqCount2.set(char, (freqCount2.get(char) || 0) + 1);
    }

    // Check if the sets of characters are the same
    const set1 = new Set(freqCount1.keys());
    const set2 = new Set(freqCount2.keys());
    if (![...set1].every((char) => set2.has(char))) {
        return false;
    }

    // Check if the frequencies of characters are the same
    const freqValues1 = [...freqCount1.values()].sort((a, b) => a - b).join("");
    const freqValues2 = [...freqCount2.values()].sort((a, b) => a - b).join("");

    return freqValues1 === freqValues2;

    // dynamically
    // const w1 = new Array(26).fill(0);
    // const w2 = new Array(26).fill(0);
    // const a = "a".charCodeAt(0);
    // for (let i = 0; i < word1.length; i++) {
    //     const char1 = word1.charCodeAt(i);
    //     const char2 = word2.charCodeAt(i);
    //     w1[char1 - a] = w1[char1 - a] + 1;
    //     w2[char2 - a] = w2[char2 - a] + 1;
    // }

    // for (let i = 0; i < w1.length; i++)
    //     if ((w1[i] > 0 && w2[i] === 0) || (w1[i] === 0 && w2[i] > 0))
    //         return false;
    // return w1.sort().join() === w2.sort().join();
}

// Test cases
console.log(closeStrings("abc", "bca")); // Output: true
// console.log(closeStrings("a", "aa")); // Output: false
// console.log(closeStrings("cabbba", "abbccc")); // Output: true

/*

This code first checks if the lengths of the strings are the same. 
Then it counts the frequencies of characters in both words using Map. 
After that, it compares the sets of characters in both words and checks if the frequency distributions of characters are the same by sorting their frequency arrays and comparing them. 
If both conditions are met, it returns true, indicating that the strings can be transformed using the given operations, otherwise false.

*/
