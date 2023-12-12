// This problem can be solved using the bitwise XOR operation in JavaScript. When two identical numbers are XORed together, the result is 0.
// Therefore, if we XOR all the numbers in the array together, the duplicates will cancel each other out, leaving only the single number that appears once.
function singleNumber(nums) {
    let result = 0;

    // XOR all numbers in the array
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }

    return result;

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums.lastIndexOf(nums[i]) === nums.indexOf(nums[i])) {
    //         return nums[i];
    //     }
    // }
}

// Example usage:
let nums = [2, 3, 2, 4, 3];
let single = singleNumber(nums);
console.log(single); // Output the single number that appears once

nums = [2, 2, 1];
single = singleNumber(nums);
console.log(single); // Output the single number that appears once

nums = [1];
single = singleNumber(nums);
console.log(single); // Output the single number that appears once

/*

Explanation:

1. The function singleNumber takes an array of integers nums.
2. It initializes result to 0.
3. It iterates through the array using a loop.
4. For each number in the array, it performs an XOR operation (^=) with result. This operation cancels out duplicates.
5. The final value of result will be the number that appears only once in the array.
6. The function returns this single number.

For instance, in the example provided (nums = [2, 3, 2, 4, 3]), the output will be 4 because 4 is the only number that appears only once in the array. 
All other numbers appear twice and cancel each other out when XORed together.

*/
