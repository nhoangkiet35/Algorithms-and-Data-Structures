function maxSubarraySum(array, len) {
    // add whatever parameters you deem necessary - good luck!
    let curSum = 0,
        prevSum = 0;
    if (array.length < len) return null;

    for (let index = 0; index < len; index++) {
        curSum += array[index];
    }
    prevSum = curSum;

    for (let index = len; index < array.length; index++) {
        curSum = curSum + array[index] - array[index - len];
        prevSum = Math.max(prevSum, curSum);
    }

    return prevSum;
}

// Time Complexity - O(N)
// Space Complexity - O(1)

console.log(
    maxSubarraySum([100, 200, 300, 400], 2), // 700
    maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), // 39
    maxSubarraySum([-3, 4, 0, -2, 6, -1], 2), // 5
    maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2), // 5
    maxSubarraySum([2, 3], 3), // null
);
