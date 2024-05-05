/**
 * @param {string} digits
 * @return {string[]}
 */
const phoneMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
};

var letterCombinations = function (digits) {
    if (digits.length === 0) return [];

    const combinations = [];
    const backtrack = (index, current) => {
        if (index === digits.length) {
            combinations.push(current);
            return;
        }

        const letters = phoneMap[digits[index]];

        for (let i = 0; i < letters.length; i++) {
            backtrack(index + 1, current + letters[i]);
        }
    };

    backtrack(0, "");
    return combinations;
};

// Example 1:

var digits = "23";
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations(digits));
// Example 2:

var digits = "";
// Output: []
console.log(letterCombinations(digits));
// Example 3:

var digits = "2";
// Output: ["a","b","c"]
console.log(letterCombinations(digits));
