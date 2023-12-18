/*
Radix Sort Helper - mostDigits
Implement a function called mostDigits  which accepts an array of integers 
and returns a count of the number of digits for the number in the array with the most digits.

It may help to use your digitCount  code from the previous exercise in this function.

The mostDigits function determines the count of the most digits present in any number within an array of integers. 
This can be accomplished by using the digitCount function created earlier.
*/
function digitCount(num) {
    // using this function may be helpful. good luck!
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}
/*
This function iterates through the array, calculating the number of digits for each element using the digitCount function. 
It keeps track of the maximum number of digits found so far (maxDigits) and returns this count.

You can use this mostDigits function as a helper in implementing Radix Sort or other algorithms 
that require information about the maximum number of digits in a collection of integers!
*/
// Examples
console.log(
    mostDigits([1, 9, 10, 100, 99]), // 3
    mostDigits([100, 1010, 1, 500]), // 4
    mostDigits([0, 100000, 400, 12, 8]), // 6
    mostDigits([]), // 0
);
