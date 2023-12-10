// To solve this problem, you can use a sliding window approach to iterate through the string s and keep track of the count of vowel letters within each substring of length k. You'll maintain a sliding window of size k and count the number of vowels within that window.
/*
Here's the step-by-step explanation of the algorithm:

1. Initialize variables to store the maximum count of vowels (maxVowels) and the count of vowels within the current window (currentVowels).
2. Create a helper function (countVowels) to count the number of vowels in a given substring.
3. Iterate through the string s from index 0 to s.length - k:
    Calculate the count of vowels within the current substring of length k using the countVowels function.
    Update maxVowels with the maximum of maxVowels and currentVowels.
4. Return maxVowels as the maximum number of vowel letters in any substring of length k.

*/
function maxVowels(s, k) {
    // 0.009
    // let maxVowels = 0;
    // let currentVowels = 0;
    // const vowels = ["a", "e", "i", "o", "u"];
    // const countVowels = (substring) => {
    //     let count = 0;
    //     for (const char of substring) {
    //         if (vowels.includes(char)) {
    //             count++;
    //         }
    //     }
    //     return count;
    // };
    // for (let i = 0; i <= s.length - k; i++) {
    //     const substring = s.slice(i, i + k);
    //     currentVowels = countVowels(substring);
    //     maxVowels = Math.max(maxVowels, currentVowels);
    // }
    // return maxVowels;
    // 0.006
    // Set of vowel letters
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    // Maximum number of vowels seen so far
    let maxVowels = 0;
    // Current number of vowels in the sliding window
    let currentVowels = 0;
    // Left and right pointers of the sliding window
    let left = 0,
        right = 0;
    while (right < s.length) {
        // Check if current character is a vowel
        if (vowels.has(s[right])) {
            currentVowels++;
        }
        // Update the maximum number of vowels
        maxVowels = Math.max(maxVowels, currentVowels);
        // Check if window size has reached k
        if (right - left + 1 === k) {
            // Remove the leftmost character from the window
            if (vowels.has(s[left])) {
                currentVowels--;
            }
            left++;
        }
        // Slide the window to the right
        right++;
    }
    return maxVowels;
}

// console.log(maxVowels("abciiidef", 3)); // Output: 3
// console.log(maxVowels("aeiou", 2)); // Output: 2
// console.log(maxVowels("leetcode", 3)); // Output: 2

var t1 = performance.now();
console.log(maxVowels("weallloveyou", 7)); // Output: 4
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
