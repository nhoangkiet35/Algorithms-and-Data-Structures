function areThereDuplicates(...args) {
    // Time Complexity : O(n log n)
    args.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    console.log(args);

    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}

// Time Complexity : O(n log n)
var t1 = performance.now();
areThereDuplicates(3, 1, 3, 5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 45, 111000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
