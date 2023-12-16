//  You can solve this problem using a stack to keep track of the characters and numbers encountered while iterating through the given encoded string.
function decodeString(s) {
    const stack = [];

    for (let char of s) {
        if (char !== "]") {
            stack.push(char);
        } else {
            // Pop characters until '[' is found
            let currentStr = "";
            while (stack.length && stack[stack.length - 1] !== "[") {
                currentStr = stack.pop() + currentStr;
            }
            stack.pop(); // Pop '['

            let num = "";
            while (stack.length && !isNaN(stack[stack.length - 1])) {
                num = stack.pop() + num;
            }
            num = parseInt(num); // Convert the string to a number

            stack.push(currentStr.repeat(num)); // Repeat the string 'num' times and push it back to the stack
        }
    }

    return stack.join("");
}

// Test cases
console.log(decodeString("3[a]2[bc]")); // Output: "aaabcbc"
console.log(decodeString("3[a2[c]]")); // Output: "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // Output: "abcabccdcdcdef"

/*
This function iterates through the encoded string character by character. 
When encountering a ']', it pops characters until it finds the corresponding '[' and 
the number that precedes it, repeats the string enclosed within the brackets, and pushes it back to the stack. 
Finally, it joins the characters in the stack to form the decoded string.

*/
