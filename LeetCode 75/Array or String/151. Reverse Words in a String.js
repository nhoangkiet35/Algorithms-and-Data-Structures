function reverseWords(s) {
    const wordsArray = s.split(/\s+/).filter((word) => word.length > 0);
    return wordsArray.reverse().join(" ");
}

// Example usage:
const inputString = "  hello   world  example  ";
const reversedWords = reverseWords(inputString);
console.log(reversedWords); // Output: "example world hello"
