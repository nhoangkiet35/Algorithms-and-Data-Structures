function removeDuplicates(nums) {
    // Handle edge case of an empty array
    if (nums.length === 0) return 0;

    // Initialize two pointers: one for the unique elements (slow) and one for traversal (fast)
    let slow = 0;

    // Iterate through the array with the fast pointer
    for (let fast = 1; fast < nums.length; fast++) {
        // Compare the current element with the previous one
        if (nums[fast] !== nums[slow]) {
            // If the elements are the same, continue with the next iteration without updating slow
            slow++;
            nums[slow] = nums[fast];
        }
    }

    // The unique elements are now in the first (slow + 1) positions
    // The function should return the number of unique elements (k)
    return slow + 1;
}

// Example usage:
let nums = [1, 1, 2, 2, 2, 3, 4, 4, 5];
let k = removeDuplicates(nums);

console.log("Updated Array:", nums.slice(0, k)); // Output: [1, 2, 3, 4, 5]
console.log("Number of Unique Elements:", k); // Output: 5
