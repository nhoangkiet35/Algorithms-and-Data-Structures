/*
Radix Sort Helper - digitCount
Implement a function called digitCount  which accepts a positive integer and returns the number of digits that the integer has.

The digitCount function helps count the number of digits in a given positive integer.
*/
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
/*
This function takes a positive integer num and returns the count of its digits. 
It utilizes logarithms to count the digits by taking the base-10 logarithm of the absolute value of the number 
and adding 1 to account for the edge case when the number is 0.
*/
// Examples
console.log(
    digitCount(1), // 1
    digitCount(9), // 1
    digitCount(25), // 2
    digitCount(314), // 3
    digitCount(1234), // 4
    digitCount(77777), // 5
);
