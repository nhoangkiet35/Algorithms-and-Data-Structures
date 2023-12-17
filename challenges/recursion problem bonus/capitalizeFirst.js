// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(array) {
    // add whatever parameters you deem necessary - good luck!
    if (array.length === 1)
        return [array[0][0].toUpperCase() + array[0].substring(1)];
    const res = capitalizeFirst(array.slice(0, -1));
    let string =
        array.slice(array.length - 1)[0][0].toUpperCase() +
        array.slice(array.length - 1)[0].substring(1);
    res.push(string);
    return res;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
