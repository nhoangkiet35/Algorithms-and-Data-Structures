function areThereDuplicates(...numbers) {
    // good luck. (supply any arguments you deem necessary.)
    if (numbers.length === 0) return false;
    const frequency = {};
    for (const item of numbers) {
        frequency[item] = ++frequency[item] || 1;
        if (frequency[item] > 1) {
            return true;
        }
        // if (item in frequency) {
        //     return true;
        // }
    }
    return false;
}

// Time Complexity : O(n)
var t1 = performance.now();
areThereDuplicates(3, 1, 3, 5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 45, 111000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

console.log(
    areThereDuplicates(1, 2, 3), // false
    areThereDuplicates(1, 2, 2), // true
    areThereDuplicates("a", "b", "c", "a"), // true
);
