// To solve this problem in JavaScript, you can count the occurrences of each value in the array and check if the count of occurrences is unique for each value.
function uniqueOccurrences(arr) {
    const countMap = new Map();

    // Count occurrences of each value
    for (let num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    const occurrenceSet = new Set(countMap.values());

    return occurrenceSet.size === countMap.size;

    // const newObj = {};
    // for (let i = 0; i < arr.length; i++) {
    //     if (newObj[arr[i]]) newObj[arr[i]]++;
    //     else newObj[arr[i]] = 1;
    // }
    // let vals = Object.values(newObj);
    // if (vals.length === new Set(vals).size) return true;
    // return false;
}

// Example 1
const arr1 = [1, 2, 2, 1, 1, 3];
console.log("Output for Example 1:", uniqueOccurrences(arr1)); // Output: true

// Example 2
const arr2 = [1, 2];
console.log("Output for Example 2:", uniqueOccurrences(arr2)); // Output: false

// Example 3
const arr3 = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
console.log("Output for Example 3:", uniqueOccurrences(arr3)); // Output: true

// The uniqueOccurrences function uses a Map to count the occurrences of each value in the array. Then, it creates a Set of these counts and compares the sizes of the Set and the Map. If they are equal, it means that the occurrences of each value are unique; otherwise, it returns false
