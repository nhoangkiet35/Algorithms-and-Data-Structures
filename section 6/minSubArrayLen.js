function minSubArrayLen(arr, target) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let minLength = Infinity;

    while (right < arr.length) {
        sum += arr[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= arr[left];
            left++;
        }

        right++;
    }

    return minLength === Infinity ? 0 : minLength;
}

var t1 = performance.now();
minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

console.log(
    minSubArrayLen([2, 3, 1, 2, 4, 3], 7), // 2 -> because [4,3] is the smallest subarray
    minSubArrayLen([2, 1, 6, 5, 4], 9), // 2 -> because [5,4] is the smallest subarray
    minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52), // 1 -> because [62] is greater than 52
    minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39), // 3
    minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), // 5
    minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11), // 2
    minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95), // 0
);
