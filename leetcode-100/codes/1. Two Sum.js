function twoSum(nums, target) {
    const numIndices = new Map();

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];

        if (numIndices.has(complement)) {
            return [numIndices.get(complement), index];
        }

        numIndices.set(nums[index], index);
    }
    return [];
}
/*
Certainly! To solve this problem in JavaScript, you can use a hashmap to store the indices of numbers as you iterate through the array. 
Here's an example:
{value: index}
{2:0}
{7:1}
{11:2}
{15:3}

Here's how it works:

1. We iterate through the array nums.
2. For each number, we calculate its complement (the value needed to reach the target) by subtracting the current number from the target.
3. We check if the complement exists in our numIndices hashmap. If it does, it means we've found the pair that sums up to the target, so we return the indices of both numbers.
4. If the complement doesn't exist in the hashmap, we store the current number along with its index in the numIndices hashmap.
5. If no solution is found after iterating through the entire array, we return an empty array.
This algorithm has a time complexity of O(n) since it iterates through the array only once and performs constant-time operations for hashmap lookups.
*/
// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;

var t1 = performance.now();
const result = twoSum(nums, target);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
console.log("Indices of the two numbers:", result);
