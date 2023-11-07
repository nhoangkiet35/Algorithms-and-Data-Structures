function averagePair(array, target) {
    // add whatever parameters you deem necessary - good luck!
    let left = 0,
        right = array.length - 1;
    if (array.length === 0) return false;
    let average = 0;

    while (left < right) {
        average = (array[left] + array[right]) / 2;
        if (average === target) {
            return true;
        } else if (average < target) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

// Time: O(N);
// Space: O(1);
var t1 = performance.now();
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

console.log(
    averagePair([1, 2, 3], 2.5), // true
    averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), // true
    averagePair([-1, 0, 3, 4, 5, 6], 4.1), // false
    averagePair([], 4), // false
);
