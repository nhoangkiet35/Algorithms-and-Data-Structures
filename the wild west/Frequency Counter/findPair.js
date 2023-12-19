/*
Frequency Counter / Multiple Pointer - findPair
Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

findPair([6,1,4,10,2,4], 2) // true
findPair([8,6,2,4,1,0,2,5,13],1) // true
findPair([4,-2,3,10],-6) // true
findPair([6,1,4,10,2,4], 22) // false
findPair([], 0) // false
findPair([5,5], 0) // true
findPair([-4,4], -8) // true
findPair([-4,4], 8) // true
findPair([1,3,4,6],-2) // true
findPair([0,1,3,4,6],-2) // true
Part 1 - solve this with the following requirements:

Time Complexity Requirement - O(n)

Space Complexity Requirement - O(n)

Part 2 - solve this with the following requirements:

Time Complexity Requirement - O(n log n)

Space Complexity Requirement - O(1)
*/
// Part 1 - Time Complexity: O(n), Space Complexity: O(n)
function findPairPart1(arr, n) {
    if (arr.length === 0) return false;

    const numSet = new Set();

    for (let num of arr) {
        const target1 = num - n;
        const target2 = num + n;

        if (numSet.has(target1) || numSet.has(target2)) {
            return true;
        }

        numSet.add(num);
    }

    return false;
}
/*
This function utilizes a set to keep track of the numbers encountered while iterating through the array. For each element in the array, 
it calculates the potential pair values (target1 and target2) based on the difference n. If either of these targets exists in the set, it immediately returns true. 
If the loop completes without finding a pair, it returns false.
*/

// Part 2 - Time Complexity: O(n log n), Space Complexity: O(1)
function findPairPart2(arr, n) {
    if (arr.length === 0) return false;

    arr.sort((a, b) => a - b);

    let left = 0;
    let right = 1;

    while (right < arr.length) {
        const diff = arr[right] - arr[left];

        if (left !== right && diff === n) {
            return true;
        } else if (diff < n || left === right) {
            right++;
        } else {
            left++;
        }
    }

    return false;
}
/*
This implementation sorts the array and uses two pointers, left and right, to track the potential pair values. 
While incrementing right, it checks for the difference between arr[right] and arr[left]. If the difference is equal to n, it returns true. 
Otherwise, it adjusts the pointers based on the calculated difference until a pair is found or the loop completes.
*/

// Examples

console.log(
    findPairPart1([6, 1, 4, 10, 2, 4], 2), // true
    findPairPart1([8, 6, 2, 4, 1, 0, 2, 5, 13], 1), // true
    findPairPart1([4, -2, 3, 10], -6), // true
    findPairPart1([6, 1, 4, 10, 2, 4], 22), // false
    findPairPart1([], 0), // false
    findPairPart1([5, 5], 0), // true
    findPairPart1([-4, 4], -8), // true
    findPairPart1([-4, 4], 8), // true
    findPairPart1([1, 3, 4, 6], -2), // true
    findPairPart1([0, 1, 3, 4, 6], -2), // true
);
