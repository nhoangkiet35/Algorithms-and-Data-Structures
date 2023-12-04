function binarySearch(array, value) {
    // add whatever parameters you deem necessary - good luck!
    let left = 0,
        right = array.length - 1,
        middle = Math.floor((left + right) / 2);
    while (left <= right && array[middle] !== value) {
        if (array[middle] < value) {
            left = ++middle;
        } else {
            right = --middle;
        }
        middle = Math.floor((left + right) / 2);
    }
    return array[middle] === value ? middle : -1;
}

var t1 = performance.now();
binarySearch(
    [
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
        98, 99,
    ],
    10,
);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

console.log(
    binarySearch([1, 2, 3, 4, 5], 2), // 1
    binarySearch([1, 2, 3, 4, 5], 3), // 2
    binarySearch([1, 2, 3, 4, 5], 5), // 4
    binarySearch([1, 2, 3, 4, 5], 6), // -1
    binarySearch(
        [
            5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
            96, 98, 99,
        ],
        10,
    ), // 2
    binarySearch(
        [
            5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
            96, 98, 99,
        ],
        95,
    ), // 16
    binarySearch(
        [
            5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
            96, 98, 99,
        ],
        100,
    ), // -1
);
