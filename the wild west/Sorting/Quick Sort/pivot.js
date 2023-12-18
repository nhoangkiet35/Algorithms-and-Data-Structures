/*
The pivot  function is responsible for taking an array, setting the pivot value, and mutating the array so that 
all values less than the pivot wind up to the left of it, and all values greater than the pivot wind up to the right of it. 
It's also helpful if this helper returns the index of where the pivot value winds up.
*/

// The pivot function for Quick Sort is essential.
// It determines where to place the pivot element in the array and separates the smaller elements to its left and larger elements to its right.
function pivot(arr, comparator, start = 0, end = arr.length - 1) {
    if (!comparator) {
        comparator = function (a, b) {
            return a - b;
        };
    }

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (comparator(arr[i], pivot) < 0) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
}

// Examples

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strLength(a, b) {
    return a.length - b.length;
}

console.log(
    pivot(arr1), // 3
    pivot(arr2), // 4
    pivot(arr3, strLength), // 1
);
console.log(
    arr1.slice(0, 3).sort((a, b) => a - b), // [2, 3, 4]
    arr1.slice(3).sort((a, b) => a - b), // [5, 7, 8, 9, 10, 20]
);

arr2.slice(0, 4).sort((a, b) => a - b); // [0, 2, 4, 5]
arr2.slice(4).sort((a, b) => a - b); // [8, 10, 11, 12, 13, 16]

arr3.slice(0, 1).sort(strLength); // ["Blue"]
arr3.slice(1).sort(strLength); // ["LilBub", "Grumpy", "Garfield", "Heathcliff"]

/*
This pivot function accepts an array, an optional comparator function, a start index (defaulting to 0), 
and an end index (defaulting to the last index of the array).

It uses the Hoare partition scheme to place the pivot element at its correct position in the sorted array. 
It iterates through the array, comparing elements to the pivot. 
Elements smaller than the pivot are moved to the left by swapping them with elements at the swapIdx. 
Finally, the pivot is placed in its correct position by swapping it with the element at swapIdx.

*/
