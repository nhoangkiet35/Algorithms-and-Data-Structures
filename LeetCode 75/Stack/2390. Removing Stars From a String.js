function removeStars(s) {
    // very slow PENDING
    // const arr = s.split("");
    // let stars = [];

    // // Find the indices of all stars in the string
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === "*") {
    //         stars.push(i);
    //     }
    // }

    // // Process each star and remove closest non-star character to its left
    // for (let i = 0; i < stars.length; i++) {
    //     let index = stars[i];
    //     while (index >= 0 && arr[index] === "*") {
    //         index--;
    //     }
    //     if (index >= 0) {
    //         arr[index] = "*"; // Replace the non-star character with a star
    //     }
    // }

    // // Filter out the remaining stars and return the resulting string
    // return arr.filter((char) => char !== "*").join("");

    const stack = [];

    for (const char of s) {
        if (char === "*") {
            // If current character is '*', remove the closest non-star character by popping from the stack
            // while (stack.length && stack[stack.length - 1] === "*") {
            //     stack.pop();
            // }
            if (stack.length) {
                stack.pop(); // Remove the closest non-star character
            }
        } else {
            stack.push(char); // Push non-star characters onto the stack
        }
    }

    return stack.join(""); // Join the characters remaining in the stack
}

// Test cases
console.log(removeStars("leet**cod*e")); // Output: "lecoe"
console.log(removeStars("erase*****")); // Output: ""

/* using Array
This function first identifies the indices of all the stars in the input string. 
Then, it iterates through these stars, finding the closest non-star character to their left and removes them by replacing them with stars. 
Finally, it filters out the remaining stars and joins the characters to form the resulting string.
*/

/* using Stack
This implementation uses a stack to simulate the process. 
It iterates through each character in the input string. 
When encountering a star '*', it checks the stack for the closest non-star character to its left, removes it along with the star, and continues. 
After processing the entire string, it joins the remaining characters in the stack to form the resulting string.
*/
