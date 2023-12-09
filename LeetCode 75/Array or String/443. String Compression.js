// compression algorithm
function compress(chars) {
    let index = 0;
    let i = 0;

    // Iterate through the chars array, starting from index 0.
    while (i < chars.length) {
        let j = i;
        // Keep track of the current character and the count of consecutive occurrences.
        while (j < chars.length && chars[j] === chars[i]) {
            j++;
        }

        // Write the character into the chars array at the write index.
        // Move the write pointer accordingly.
        chars[index++] = chars[i];

        // If count is greater than 1, convert count to a string and write its digits into the array.
        if (j - i > 1) {
            const count = (j - i).toString();
            for (let c of count) {
                // Move the write pointer accordingly.
                chars[index++] = c;
            }
        }

        // Reset the count for the new character.
        i = j;
    }

    return index;
}

// Test cases
const chars1 = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars1)); // Output: 6, chars1 will be ["a", "2", "b", "2", "c", "3"]

const chars2 = ["a"];
console.log(compress(chars2)); // Output: 1, chars2 will be ["a"]

const chars3 = [
    "a",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
];
console.log(compress(chars3)); // Output: 4, chars3 will be ["a", "b", "1", "2"]

// Hàm nén này lặp qua mảng ký tự, đếm số lần xuất hiện liên tiếp của các ký tự.
// Nó cập nhật mảng tại chỗ theo quy tắc nén và trả về độ dài mới của mảng sau khi nén.

/*
Here's an explanation of the algorithm:

1. Initialize pointers: write and count.
2. Iterate through the chars array, starting from index 0.
3. Keep track of the current character and the count of consecutive occurrences.
4. Update the characters in place based on the compression rules:
    If the current character changes or it's the last character:
        Write the character into the chars array at the write index.
        If count is greater than 1, convert count to a string and write its digits into the array.
        Move the write pointer accordingly.
        Reset the count for the new character.
5. Return the length of the modified chars array.

*/
