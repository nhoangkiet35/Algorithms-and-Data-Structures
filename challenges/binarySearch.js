// Binary search is a search algorithm used to find the position of a target value within a sorted array.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) {
            return mid; // Target found at index mid
        } else if (arr[mid] < target) {
            left = mid + 1; // Adjusting the search range to the right half
        } else {
            right = mid - 1; // Adjusting the search range to the left half
        }
    }

    return -1; // Target not found in the array
}

// Example usage:
let sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
let targetValue = 23;

let result = binarySearch(sortedArray, targetValue);

if (result !== -1) {
    console.log(`Target ${targetValue} found at index ${result}.`);
} else {
    console.log(`Target ${targetValue} not found in the array.`);
}

/*
Explanation:

1. The binarySearch function takes a sorted array arr and a target value to search for within the array.
2. It sets up two pointers left and right to keep track of the search range.
3. Inside the while loop, it calculates the mid point and checks if the target value matches the element at index mid.
4. If the target is found, it returns the index where it was found.
5. If the target is smaller than the element at mid, it adjusts the search range to the left half by updating right.
6. If the target is larger than the element at mid, it adjusts the search range to the right half by updating left.
7. The function continues this process until the target is found or the search range is exhausted (left > right), in which case it returns -1 indicating the target was not found in the array.

This algorithm is particularly efficient for searching within sorted arrays as it continually divides the search range in half, reducing the search space significantly with each iteration.

*/
