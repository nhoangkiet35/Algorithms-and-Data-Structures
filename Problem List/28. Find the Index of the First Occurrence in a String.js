/**
 * Returns the index of the first occurrence of needle in haystack.
 * @param {string} haystack - The string to search in.
 * @param {string} needle - The string to search for.
 * @returns {number} - The index of the first occurrence of needle, or -1 if not found.
 */
var strStr = function (haystack, needle) {
    // If needle is an empty string, return 0
    if (needle === "") {
        return 0;
    }

    // Iterate through the haystack
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        // Check if the substring starting at index i matches the needle
        if (haystack.substring(i, i + needle.length) === needle) {
            return i; // Return the index of the first occurrence
        }
    }

    // If no match is found, return -1
    return -1;
};

// Example usage:
let haystack1 = "sadbutsad";
let needle1 = "sad";
console.log(strStr(haystack1, needle1)); // Output: 0

let haystack2 = "leetcode";
let needle2 = "leeto";
console.log(strStr(haystack2, needle2)); // Output: -1
