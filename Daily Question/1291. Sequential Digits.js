function sequentialDigits(low, high) {
    // const result = [];

    // // Helper function to check if a number is sequential
    // function isSequential(num) {
    //     const numStr = num.toString();
    //     for (let i = 0; i < numStr.length - 1; i++) {
    //         if (parseInt(numStr[i]) + 1 !== parseInt(numStr[i + 1])) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    // // Loop through all possible starting digits
    // for (let i = 1; i <= 9; i++) {
    //     let current = i;

    //     // Generate sequential numbers starting from the current digit
    //     while (current <= high) {
    //         if (current >= low && isSequential(current)) {
    //             result.push(current);
    //         }

    //         // Move to the next sequential number
    //         const lastDigit = current % 10;
    //         if (lastDigit < 9) {
    //             current = current * 10 + (lastDigit + 1);
    //         } else {
    //             break; // Stop if the last digit is 9
    //         }
    //     }
    // }

    // return result.sort((a, b) => a - b);

    //  use sliding window

    const digits = "123456789";
    const ans = [];

    const minLen = low.toString().length;
    const maxLen = high.toString().length;

    for (let size = minLen; size <= maxLen; ++size) {
        for (let i = 0; i + size <= digits.length; ++i) {
            const num = parseInt(digits.substring(i, i + size));

            if (num >= low && num <= high) {
                ans.push(num);
            }
        }
    }

    return ans;
}

// Example usage:
const low = 100;
const high = 300;
const result = sequentialDigits(low, high);
console.log(result.toString());
