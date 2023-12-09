// you can use a two-pointer approach to rearrange the elements in place. One pointer will iterate through the array, while the other pointer will keep track of the position to place non-zero elements.
/*
Here's a step-by-step explanation of the algorithm:

1. Initialize two pointers: i and nonZeroIdx.
2. Iterate through the array using the pointer i.
3. When encountering a non-zero element at nums[i], place it at the position indicated by nonZeroIdx.
4. Increment nonZeroIdx to the next available position for a non-zero element.
5. After the iteration, all non-zero elements will be placed at the front of the array up to nonZeroIdx. Set all elements from nonZeroIdx to the end of the array to 0.

*/
function moveZeroes(nums) {
    // let nonZeroIdx = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] !== 0) {
    //         nums[nonZeroIdx] = nums[i];
    //         nonZeroIdx++;
    //     }
    // }

    // for (let i = nonZeroIdx; i < nums.length; i++) {
    //     nums[i] = 0;
    // }

    if (nums.length > 0) {
        let i = 0;
        let j = 1;
        while (j < nums.length) {
            if (nums[i] === 0 && nums[j] === 0) {
                j++;
            } else {
                if (nums[i] === 0) {
                    [nums[j], nums[i]] = [nums[i], nums[j]];
                }
                i++;
                j++;
            }
        }
    }
}

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]

nums = [0];
moveZeroes(nums);
console.log(nums);
