var removeDuplicates = function (arrayValue) {
    let i = 0,
        j = 1;
    while (j < arrayValue.length) {
        if (arrayValue[i] !== arrayValue[j]) {
            i++;
            arrayValue[i] = arrayValue[j];
        }
        j++;
    }
    return i + 1;
};

let isArray = [1, 1, 4, 5, 2, 2, 3, 4];
const nums = removeDuplicates(isArray);

// BAD O(n^2)
const uniqueArray = isArray.filter(function (item, pos) {
    console.log(item + " added " + pos);
    return isArray.indexOf(item) == pos;
});

console.log(isArray, nums, uniqueArray);
