// You can achieve this in JavaScript by iterating through rows and columns to compare their values.
function countEqualRowColumnPairs(grid) {
    const n = grid.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // Compare rows with columns
            const row = grid[i];
            const col = [];
            for (let k = 0; k < n; k++) {
                col.push(grid[k][j]);
            }

            // Check if the row and column are equal
            if (arraysEqual(row, col)) {
                count++;
            }
        }
    }

    return count;

    // for (let row = 0; row < n; row++) {
    //     for (let col = 0; col < n; col++) {
    //         let match = true;
    //         for (let k = 0; k < n; k++) {
    //             if (grid[row][k] !== grid[k][col]) {
    //                 match = false;
    //                 break;
    //             }
    //         }
    //         if (match) count++;
    //     }
    // }
    // return count;
}

// Function to check if two arrays are equal
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Test cases
console.log(
    countEqualRowColumnPairs([
        [3, 2, 1],
        [1, 7, 6],
        [2, 7, 7],
    ]),
); // Output: 1
console.log(
    countEqualRowColumnPairs([
        [3, 1, 2, 2],
        [1, 4, 4, 5],
        [2, 4, 2, 2],
        [2, 4, 2, 2],
    ]),
); // Output: 3
let grid = [
    [18, 18, 18, 18, 18],
    [18, 18, 18, 18, 17],
    [18, 18, 18, 18, 18],
    [18, 18, 18, 18, 18],
    [18, 18, 18, 18, 18],
];
console.log(countEqualRowColumnPairs(grid)); // Output: 16
/*

This code defines a function countEqualRowColumnPairs that iterates through each cell of the matrix, 
compares each row with its corresponding column, and increments the count if they are equal. 
The arraysEqual function checks if two arrays are equal by comparing their elements.

*/
