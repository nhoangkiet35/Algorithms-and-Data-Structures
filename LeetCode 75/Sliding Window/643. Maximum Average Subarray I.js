function findMaxAverage(nums, k) {
    let maxAverage = 0;
    let curSum = nums.reduce((acc, cur, idx) => {
        if (idx < k) return acc + cur;
        return acc;
    }, 0);

    maxAverage = curSum;

    for (let i = k; i < nums.length; i++) {
        curSum += nums[i] - nums[i - k];

        maxAverage = Math.max(curSum, maxAverage);
    }

    return (maxAverage / k).toFixed(5);
}

let nums = [1, 12, -5, -6, 50, 3],
    k = 4;

console.log(findMaxAverage(nums, k));

(nums = [5]), (k = 1);

console.log(findMaxAverage(nums, k));
