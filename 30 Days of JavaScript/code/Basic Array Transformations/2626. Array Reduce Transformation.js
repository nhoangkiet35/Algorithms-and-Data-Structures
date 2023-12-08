function customReduce(nums, fn, init) {
    let result = init;

    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }

    return result;
}

// Test cases
const nums1 = [1, 2, 3, 4];
const sum = function sum(accum, curr) {
    return accum + curr;
};
const init1 = 0;
const output1 = customReduce(nums1, sum, init1);
console.log(output1); // Output: 10

const nums2 = [1, 2, 3, 4];
const squareSum = function sum(accum, curr) {
    return accum + curr * curr;
};
const init2 = 100;
const output2 = customReduce(nums2, squareSum, init2);
console.log(output2); // Output: 130

const nums3 = [];
const zeroSum = function sum(accum, curr) {
    return 0;
};
const init3 = 25;
const output3 = customReduce(nums3, zeroSum, init3);
console.log(output3); // Output: 25
