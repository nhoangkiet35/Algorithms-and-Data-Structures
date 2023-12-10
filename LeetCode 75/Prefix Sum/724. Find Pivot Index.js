// ou can solve this problem by iterating through the array while keeping track of the total sum and the left sum at each index
function pivotIndex(nums) {
    let totalSum = nums.reduce((acc, cur) => acc + cur, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        console.log("%d: %s", i, nums[i]);
        console.log(leftSum, totalSum, leftSum, nums[i]);
        if (leftSum === totalSum - leftSum - nums[i]) return i;
        leftSum += nums[i];
    }

    return -1;
}

let nums = [1, 7, 3, 6, 5, 6];
let result = pivotIndex(nums);
console.log("Output for Example 1:", result);

nums = [1, 2, 3];
result = pivotIndex(nums);
console.log("Output for Example 2:", result);

nums = [2, 1, -1];
result = pivotIndex(nums);
console.log("Output for Example 3:", result);
// The pivotIndex function calculates the total sum of the array elements and iterates through the array,
// checking at each index whether the left sum is equal to the right sum.
// If found, it returns the index; otherwise, it returns - 1 if no such index exists.
