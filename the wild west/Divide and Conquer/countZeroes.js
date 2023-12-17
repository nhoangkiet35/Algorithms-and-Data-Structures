// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
/*
To achieve a time complexity of O(log n) for counting zeroes in an array of 1s followed by 0s, you can utilize a modified binary search algorithm. 
Since the array is sorted with all 1s at the start and all 0s following, we can modify the binary search approach to find the first occurrence of 0.
*/
function countZeroes(arr) {
    // O(n)
    // for (const num of arr) {
    //     if (num === 0) count++;
    // }
    // return count;

    // O(log n)
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === 0 && (arr[mid - 1] === 1 || mid === 0)) {
            return arr.length - mid;
        }

        if (arr[mid] === 1) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return 0; // If there are no zeroes
}

// Test cases
console.log(countZeroes([1, 1, 1, 1, 0, 0])); // Output: 2
console.log(countZeroes([1, 0, 0, 0, 0])); // Output: 4
console.log(countZeroes([0, 0, 0])); // Output: 3
console.log(countZeroes([1, 1, 1, 1])); // Output: 0

// Time Complexity - O(log n)

/*
This algorithm uses a modified binary search to find the first occurrence of 0 in the sorted array. 
The time complexity of this approach is O(log n) because it performs a binary search to locate the transition point from 1 to 0 in the array.
*/
