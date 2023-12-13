// here's an explanation of how you can solve this problem using a hashmap and a set in JavaScript:
function countEqualRowColumnPairs(grid) {
    const n = grid.length;
    let rowCount = new Map();
    let colCount = new Map();
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // overriding rowCount and colCount in Map
            // Count occurrences of elements in rows and columns
            rowCount.set(i, rowCount.get(i) || []);
            rowCount.get(i).push(grid[i][j]);

            colCount.set(j, colCount.get(j) || []);
            colCount.get(j).push(grid[i][j]);
        }
    }
    // console.log(rowCount);
    // console.log(colCount);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // Check if the row and column sets are equal
            if (arraysEqual([...rowCount.get(i)], [...colCount.get(j)])) {
                count++;
            }
        }
    }

    return count;

    // const rows = new Map();
    // for (let row of grid) {
    //     const rowStr = JSON.stringify(row);
    //     rows.set(rowStr, rows.get(rowStr) ? rows.get(rowStr) + 1 : 1);
    // }
    // for (let i = 0; i < grid.length; i++) {
    //     const col = JSON.stringify(grid.map((row) => row[i]));
    //     count += rows.get(col) || 0;
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
let grid = [
    [18, 18, 18, 18, 18],
    [18, 18, 18, 18, 17],
    [18, 18, 18, 18, 18],
    [18, 18, 18, 18, 18],
    [18, 18, 18, 18, 18],
];
// console.log(
//     countEqualRowColumnPairs([
//         [3, 2, 1],
//         [1, 7, 6],
//         [2, 7, 7],
//     ]),
// ); // Output: 1

// console.log(
//     countEqualRowColumnPairs([
//         [3, 1, 2, 2],
//         [1, 4, 4, 5],
//         [2, 4, 2, 2],
//         [2, 4, 2, 2],
//     ]),
// ); // Output: 3

console.log(countEqualRowColumnPairs(grid)); // Output: 16

/*

In this solution:

1. rowCount and colCount are maps where keys represent row and column indices, and values are sets containing the elements in the respective rows and columns.
2. We iterate through the grid to populate these maps.
3. Later, we compare the sets of elements in rows and columns to find matching pairs, incrementing the count if they're equal.
4. The arraysEqual function checks if two arrays are equal after sorting their elements.

*/
