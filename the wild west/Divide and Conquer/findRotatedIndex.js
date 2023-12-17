// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer.
// The function should return the index of the integer in the array.
// If the value is not found, return -1.

/*
To find the index of an integer in a rotated sorted array with a time complexity of O(log n) and space complexity of O(1), 
you can modify the binary search algorithm.
*/
function findRotatedIndex(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        // If left half is sorted
        if (arr[start] <= arr[mid]) {
            if (target >= arr[start] && target < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        // If right half is sorted
        else {
            if (target > arr[mid] && target <= arr[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return -1;
}

// Test cases
console.log(findRotatedIndex([3, 4, 1, 2], 4)); // Output: 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // Output: 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // Output: 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // Output: -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // Output: -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // Output: 5

// Constraints:

// Time Complexity - O(log n)

// Space Complexity - O(1)

/*
This algorithm performs a modified binary search by considering whether the left half or 
the right half of the array is sorted, and then adjusting the search window accordingly. 
This achieves the required time complexity of O(log n) and space complexity of O(1).
*/
