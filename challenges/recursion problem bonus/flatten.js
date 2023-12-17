// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(array) {
    // add whatever parameters you deem necessary - good luck!
    let result = [];
    for (var index = 0; index < array.length; index++) {
        if (Array.isArray(array[index])) {
            result = result.concat(flatten(array[index]));
        } else {
            result.push(array[index]);
        }
    }
    return result;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
