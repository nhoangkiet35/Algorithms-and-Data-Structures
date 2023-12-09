// var mergeAlternately = function (word1, word2) {
//     let len1 = word1.length;
//     let len2 = word2.length;
//     let newString = "";
//     for (let i = 0; i < len1; i++) {
//         newString += word1[i] + returnValidString(word2[i]);
//     }
//     if (len2 > len1) {
//         newString += word2.slice(len1);
//     }

//     return newString;
// };

// const returnValidString = (char) => (char ? char : "");

function mergeAlternately(word1, word2) {
    let merged = "";
    const maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (word1[i]) {
            merged += word1[i];
        }
        if (i < word2.length) {
            merged += word2[i];
        }
    }

    return merged;
}

// Example usage:
const mergedString = mergeAlternately("hello", "world");
console.log(mergedString); // Output: "hweolrllod"
