/*
Certainly! To find the longest palindromic substring within a given string s, you can use a dynamic programming approach. 
Here's an explanation of how to achieve this in JavaScript:
*/
function longestPalindrome(s) {
    if (s === null || s.length < 1) return "";

    let start = 0,
        end = 0;

    for (let index = 0; index < s.length; index++) {
        const len1 = expandAroundCenter(s, index, index);
        const len2 = expandAroundCenter(s, index, index + 1);
        const len = Math.max(len1, len2);

        if (len > end - start) {
            start = index - Math.floor((len - 1) / 2);
            end = index + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}
function expandAroundCenter(s, left, right) {
    let L = left,
        R = right;

    while (L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
        L--;
        R++;
    }

    return R - L - 1;
}
/*
Here's how this solution works:

1. The longestPalindrome function initiates two pointers start and end to keep track of the longest palindrome found so far.
2. It iterates through the string s and expands around each character or between characters to check for palindromes using the expandAroundCenter helper function.
3. The expandAroundCenter function takes a string s and two indices, left and right, and checks if the characters at these indices (and expanding outwards) form a palindrome. It returns the length of the palindrome found.
4. Within the main loop, it calculates the length of palindromes centered at the current character and updates the start and end indices if a longer palindrome is found.
5. Finally, it returns the longest palindromic substring found in the input string s.

This algorithm has a time complexity of O(n^2), where n is the length of the input string, due to the nested iteration over the string and the expansion around each character.
*/
// Example usage:
const inputString = "cbbd";
const result = longestPalindrome(inputString);
console.log("Longest palindromic substring:", result);
