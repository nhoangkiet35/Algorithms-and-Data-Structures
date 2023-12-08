function sortedBy(arr, fn) {
    return arr.slice().sort((a, b) => {
        return fn(a) - fn(b);
    });
}

// Example usage:

const arr1 = [5, 4, 1, 2, 3];
const fn1 = (x) => x;
console.log(sortedBy(arr1, fn1)); // Output for arr1 and fn1

const arr2 = [{ x: 1 }, { x: 0 }, { x: -1 }];
const fn2 = (d) => d.x;
console.log(sortedBy(arr2, fn2)); // Output for arr2 and fn2

const arr3 = [
    [3, 4],
    [5, 2],
    [10, 1],
];
const fn3 = (x) => x[1];
console.log(sortedBy(arr3, fn3)); // Output for arr3 and fn3
