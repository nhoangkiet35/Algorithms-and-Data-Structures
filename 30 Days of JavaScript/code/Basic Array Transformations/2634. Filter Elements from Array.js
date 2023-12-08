function filter(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const isTruthy = fn(element, i);
        if (isTruthy) {
            filteredArr.push(element);
        }
    }
    return filteredArr;
}

// Test cases
const arr1 = [0, 10, 20, 30];
const greaterThan10 = function greaterThan10(n) {
    return n > 10;
};
const result1 = filter(arr1, greaterThan10);
console.log(result1); // Output: [20, 30]

const arr2 = [1, 2, 3];
const firstIndex = function firstIndex(n, i) {
    return i === 0;
};
const result2 = filter(arr2, firstIndex);
console.log(result2); // Output: [1]

const arr3 = [-2, -1, 0, 1, 2];
const plusOne = function plusOne(n) {
    return n + 1;
};
const result3 = filter(arr3, plusOne);
console.log(result3); // Output: [-2, 0, 1, 2]
