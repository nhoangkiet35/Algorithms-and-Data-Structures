/*
Sorting Exercise - merge helper
Given two sorted arrays, write a function called merge which accepts two SORTED arrays 
and returns a new array with both of the values from each array sorted.

This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.
Also, do not use the built in .sort method!
*/

function merge(arr1, arr2, comparator) {
    if (!comparator) {
        comparator = function (a, b) {
            return a - b;
        };
    }

    const merged = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (comparator(arr1[i], arr2[j]) <= 0) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

// Examples

var arr1 = [1, 3, 4, 5];
var arr2 = [2, 4, 6, 8];
console.log(
    merge(arr1, arr2), // [1,2,3,4,4,5,6,8]
);

arr1; // [1,3,4,5];
arr2; // [2,4,6,8];

var arr3 = [-2, -1, 0, 4, 5, 6];
var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
console.log(
    merge(arr3, arr4), // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]
);

var arr5 = [3, 4, 5];
var arr6 = [1, 2];
console.log(
    merge(arr5, arr6), // [1,2,3,4,5]
);

var names = ["Bob", "Ethel", "Christine"];
var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];

function stringLengthComparator(str1, str2) {
    return str1.length - str2.length;
}
console.log(
    merge(names, otherNames, stringLengthComparator), // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]
);
