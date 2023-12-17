// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
/*
You can achieve O(log n) time complexity using a modified binary search algorithm to find the leftmost and rightmost occurrences of the given number in the sorted array. 
Then, calculate the frequency by subtracting their indices.
*/
function findLeftMost(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let leftMost = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            leftMost = mid;
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return leftMost;
}

function findRightMost(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let rightMost = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            rightMost = mid;
            left = mid + 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return rightMost;
}

function sortedFrequency(arr, target) {
    const leftMostIdx = findLeftMost(arr, target);
    const rightMostIdx = findRightMost(arr, target);

    if (leftMostIdx === -1 || rightMostIdx === -1) {
        return -1;
    }

    return rightMostIdx - leftMostIdx + 1;
}

// Time Complexity - O(log n)

// Test cases
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // Output: 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // Output: 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // Output: 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // Output: -1

/*
This code defines two helper functions (findLeftMost and findRightMost) to find the leftmost and rightmost occurrences of the target number using binary search. 
Then, the sortedFrequency function calls these helpers and calculates the frequency based on their indices. 
This approach achieves a time complexity of O(log n).
*/
