/*
Certainly! To find the length of the longest substring without repeating characters in a string s, you can use a sliding window approach. 
Here's an explanation in JavaScript:
*/

function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charMap = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (charMap[currentChar] !== undefined) {
            // If the character is already in the map, move the start pointer
            // to the next position after the last occurrence of the current character
            start = Math.max(start, charMap[currentChar] + 1);
        }

        // Update the character's last seen index
        charMap[currentChar] = end;

        // Update the maximum length of the substring
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}

/*
Here's how the function works:

1. It initializes maxLength to store the length of the longest substring, start as the start of the window, and charMap to keep track of characters and their indices.
2. It iterates through the string using the end pointer.
3. For each character in the string, it checks if the character is already in the charMap. If it is, it updates the start pointer to the next position after the last occurrence of the character.
4. It updates the character's last seen index in the charMap.
5. It calculates the length of the current substring and updates maxLength if a longer substring is found without repeating characters.
6. Finally, it returns the maxLength, which represents the length of the longest substring without repeating characters in the input string s.
*/

// Example usage:
// const inputString = "abcabcbb";
// const inputString = "pwwkew";
const inputString = "pwbppcb";
const length = lengthOfLongestSubstring(inputString);
console.log(
    "Length of the longest substring without repeating characters:",
    length,
);
