function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // Target found
        } else if (nums[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    // If the loop ends, the target is not found
    // The variable 'left' now points to the position where the target should be inserted
    return left;
}

// Example usage:
const nums = [1, 3, 5, 6];
const target = 5;
const result = searchInsert(nums, target);
console.log(result);
