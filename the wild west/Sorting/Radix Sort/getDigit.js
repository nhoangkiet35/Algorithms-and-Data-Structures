/*
User
Radix Sort Helper - getDigit
Implement a function called getDigit  which accepts a positive integer and a position, and returns the digit in that number at the given position. 
The position reads from right to left, so the 0th position corresponds to the rightmost digit.
*/
// The getDigit function will extract and return the digit at a specific position in a given number.
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
/*
This getDigit function takes a positive integer (num) and a position (place) and returns the digit at that position. 
It uses math operations to get the digit at the specified place by first dividing the number by 10 raised to the power of the place 
(to shift to the right position) and then using modulo 10 to extract the digit at that place.
*/
// Examples
console.log(
    getDigit(12345, 0), // 5
    getDigit(12345, 1), // 4
    getDigit(12345, 2), // 3
    getDigit(12345, 3), // 2
    getDigit(12345, 4), // 1
    getDigit(12345, 5), // 0
);
console.log(
    getDigit(8987, 0), // 7
    getDigit(8987, 1), // 8
    getDigit(8987, 2), // 9
    getDigit(8987, 3), // 8
    getDigit(8987, 4), // 0
);
