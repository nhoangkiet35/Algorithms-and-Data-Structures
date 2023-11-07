function flatten(array) {
    // add whatever parameters you deem necessary - good luck!
    // const result = [];
    // function helper(helperInput) {
    //     if (helperInput.length === 0) return;
    //     if (Array.isArray(helperInput[0])) {
    //         result.push(helperInput[0].flat());
    //     } else {
    //         result.push(helperInput[0]);
    //     }
    //     helper(helperInput.slice(1));
    // }
    // helper(array);
    // return result;
    return array.flat();
}

console.log(
    flatten([1, 2, 3, [4, 5]]),
    flatten([1, 2, 3, [4, 5]]), // [1, 2, 3, 4, 5]
    flatten([1, [2, [3, 4], [[5]]]]), // [1, 2, 3, 4, 5]
    flatten([[1], [2], [3]]), // [1,2,3]
    flatten([[[[1], [[[2]]]]]]),
);
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
