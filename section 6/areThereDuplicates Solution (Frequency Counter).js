function areThereDuplicates(...arguments) {
    let collection = {};
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }
    for (let key in collection) {
        if (collection[key] > 1) return true;
    }
    return false;
}

var t1 = performance.now();
areThereDuplicates(3, 1, 3, 5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 45, 111000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
