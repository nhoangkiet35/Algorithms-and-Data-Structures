function productExceptSelf(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);

    // Calculate the product of all elements to the left of each element
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] *= leftProduct;
        leftProduct *= nums[i];
    }

    // Calculate the product of all elements to the right of each element
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
}

// Example usage:
let nums = [1, 2, 3, 4];
let result = productExceptSelf(nums);
console.log(result); // Output: [24, 12, 8, 6]

// nums = [-1, 1, 0, -3, 3];
// result = productExceptSelf(nums);
// console.log(result); // Output: [0,0,9,0,0]
