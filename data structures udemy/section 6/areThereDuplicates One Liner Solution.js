function areThereDuplicates(...arguments) {
    return new Set(arguments).size !== arguments.length;
}

// Time Complexity : O(n)
var t1 = performance.now();
areThereDuplicates(3, 1, 3, 5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 45, 111000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
