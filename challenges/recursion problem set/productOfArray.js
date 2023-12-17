/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(array) {
    if (array.length === 0) return 1;

    return array[0] * productOfArray(array.slice(1));
}
