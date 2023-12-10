// This problem can be solved using a sliding window approach.
// We'll maintain a window with at most k zeros.
function longestOnes(nums, k) {
    let left = 0;
    let maxOnesCount = 0;
    let zeroCount = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        // Shrink the window from the left if zeroCount exceeds k
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        // console.log("index", right - left + 1);
        // Update maxOnesCount
        maxOnesCount = Math.max(maxOnesCount, right - left + 1);
    }

    return maxOnesCount;
}

// Test cases
// const nums1 = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const nums1 = [1, 1, 0, 1, 1, 1, 0, 0];
const k1 = 2;
console.log(longestOnes(nums1, k1)); // Output: 6

const nums2 = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
const k2 = 3;
console.log(longestOnes(nums2, k2)); // Output: 10

/*
Explanation:

1. left and right pointers represent the window boundaries.
2. We move the right pointer forward, counting zeros encountered.
3. When the count of zeros exceeds k, we shrink the window from the left until the count becomes valid (less than or equal to k).
4. During this process, we keep track of the maximum length of the window containing ones (using maxOnesCount).

This algorithm ensures that we maintain a window with at most k zeros and finds the maximum length of consecutive ones in the modified array.

*/
