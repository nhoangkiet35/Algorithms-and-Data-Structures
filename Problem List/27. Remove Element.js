/**
 * Removes all occurrences of val in nums in-place and returns the number of elements not equal to val.
 * @param {number[]} nums - Input array.
 * @param {number} val - Value to remove.
 * @returns {number} - Number of elements not equal to val.
 */
var removeElement = function (nums, val) {
    // Initialize a pointer to keep track of the position to insert non-val elements
    let k = 0;

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not equal to val, move it to the position k and increment k
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    // The first k elements now contain elements not equal to val
    return k;
};

// Example usage:
let nums = [3, 2, 2, 3, 4, 5, 3];
let val = 3;
let expectedNums = [2, 2, 4, 5]; // The expected answer with correct length, sorted, and no values equaling val.

let k = removeElement(nums, val);

console.assert(k === expectedNums.length, "Lengths do not match");

// Sort the first k elements of nums
nums.sort((a, b) => a - b);

// Check if the first k elements are equal to expectedNums
for (let i = 0; i < k; i++) {
    console.assert(nums[i] === expectedNums[i], "Elements do not match");
}

// If all assertions pass, the solution is accepted.
