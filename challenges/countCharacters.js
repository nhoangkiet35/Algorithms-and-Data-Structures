function countCharacters(str) {
    const charCount = {};
    // const items = str.replace(/\s/g, "");
    for (let item of str) {
        item = item.toLowerCase();
        // if (item === " ") continue;
        if (!/[a-z0-9]/.test(item)) continue;
        // if (charCount[item]) {
        //     charCount[item]++;
        // } else {
        //     charCount[item] = 1;
        // }
        charCount[item] = ++charCount[item] || 1;
    }
    return charCount;
}

const print = countCharacters("Hello World So High");
console.log(print);

/*
Here’s how it works:

The function countCharacters takes in a string str as an argument.
It initializes an empty object charCount to store the count of each character in the string.
It loops through each character in the string using a for loop.
For each character, it checks if it is a whitespace character. If it is, it skips to the next character using the continue statement.
If the character is not a whitespace character, it checks if it already exists as a key in the charCount object. If it does, it increments its value by 1. Otherwise, it adds the character as a new key to the charCount object with an initial value of 1.
Finally, it returns the charCount object with the count of each non-whitespace character.

*/
