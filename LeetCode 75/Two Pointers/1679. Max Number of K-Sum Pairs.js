// To solve this problem in JavaScript, you can use a HashMap(or an object) to keep track of the frequency of each number in the array.
// Then, for each number num in the array, check if k - num exists in the HashMap.
// If it does, decrement the frequency of both num and k - num in the HashMap, indicating that these numbers can be used for an operation.
/*
Here's the step-by-step explanation of the algorithm:

1. Initialize a HashMap (freqMap) to store the frequency of each number in the array.
2. Iterate through the array (nums) and store the frequency of each number in freqMap.
3. Iterate through the array again:
    For each num in nums, check if k - num exists in freqMap.
    If it does, decrement the frequencies of num and k - num in freqMap, and increment the count of operations performed.
4. Return the count of operations performed.

*/

function maxOperations(nums, k) {
    const freqMap = {};

    for (const num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    let operations = 0;

    for (const num of nums) {
        if (freqMap[num] > 0 && freqMap[k - num] > 0) {
            if (num === k - num && freqMap[num] < 2) {
                continue;
            }
            freqMap[num]--;
            freqMap[k - num]--;
            operations++;
        }
    }

    return operations;
}
// You can use this function by passing the integer array nums and the integer k as arguments. It will return the maximum number of operations that can be performed on the array as described in the problem.

// console.log(maxOperations([1, 2, 3, 4, 5], 6)); // Output: 2
console.log(maxOperations([3, 1, 3, 4, 3], 6)); // Output: 1
