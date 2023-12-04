function isSatisfied(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (2 * arr[i] === arr[j] + arr[j - 1]) {
                return false;
            }
        }
    }
    return true;
}

function permute(nums, start, result) {
    if (start === nums.length - 1) {
        if (isSatisfied(nums.slice())) {
            result.push(nums.slice());
        }
    } else {
        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]];
            permute(nums, start + 1, result);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }
}

function findPermutations(arr) {
    const result = [];
    permute(arr, 0, result);
    return result;
}

// Ví dụ sử dụng:
const arr = [11, 22, 33, 44];
const permutations = findPermutations(arr);
console.log("Các hoán vị thoả mãn điều kiện là:");
permutations.forEach((perm) => {
    console.log(perm);
});
