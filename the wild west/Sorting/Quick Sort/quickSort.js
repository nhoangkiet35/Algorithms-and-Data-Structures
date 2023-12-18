// Quick Sort
/*
The algorithm is as follows:

+ Pick an element in the array and designate it as the "pivot". 
While there are quite a few options for choosing the pivot. 
We'll make things simple to start, and will choose the pivot as the first element. 
This is not an ideal choice, but it makes the algorithm easier to understand for now.
+ Next, compare every other element in the array to the pivot.
+ If it's less than the pivot value, move it to the left of the pivot.
+ If it's greater, move it to the right.
+ Once you have finished comparing, the pivot will be in the right place.
+ Next, recursively call quicksort again with the left and right halves from the pivot until the array is sorted.
*/
// Quick Sort is a popular sorting algorithm that utilizes the pivot function to divide and conquer the array.
// Here's an implementation of the Quick Sort algorithm using the pivot helper function:
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

function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, comparator, left, right);
        // Recursively sort left and right partitions
        quickSort(arr, comparator, left, pivotIndex - 1);
        quickSort(arr, comparator, pivotIndex + 1, right);
    }
    return arr;
}
/*
This implementation of quickSort utilizes the pivot helper function to determine the pivot element's correct position in the array. 
Then it recursively sorts the left and right partitions of the array based on the pivot element until the entire array is sorted.
*/

// Examples

console.log(
    quickSort([4, 20, 12, 10, 7, 9]), // [4, 7, 9, 10, 12, 20]
    quickSort([0, -10, 7, 4]), // [-10, 0, 4, 7]
    quickSort([1, 2, 3]), // [1, 2, 3]
    quickSort([]),
);

var nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67,
    4342, 32,
];
console.log(
    quickSort(nums), // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
);

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}

console.log(
    quickSort(kitties, strComp), // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
);

var moarKittyData = [
    {
        name: "LilBub",
        age: 7,
    },
    {
        name: "Garfield",
        age: 40,
    },
    {
        name: "Heathcliff",
        age: 45,
    },
    {
        name: "Blue",
        age: 1,
    },
    {
        name: "Grumpy",
        age: 6,
    },
];

function oldestToYoungest(a, b) {
    return b.age - a.age;
}
console.log(
    quickSort(moarKittyData, oldestToYoungest), // sorted by age in descending order
);
