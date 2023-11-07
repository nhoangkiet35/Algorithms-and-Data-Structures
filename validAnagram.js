function validAnagram(arr1, arr2) {
    // add whatever parameters you deem necessary - good luck!
    if (arr1.length !== arr2.length) return false;
    let anagramCounter1 = {},
        anagramCounter2 = {};
    for (let val of arr1) {
        anagramCounter1[val] = ++anagramCounter1[val] || 1;
    }
    for (let val of arr2) {
        anagramCounter2[val] = ++anagramCounter2[val] || 1;
    }
    for (let key in anagramCounter1) {
        if (
            !(key in anagramCounter2) ||
            anagramCounter1[key] !== anagramCounter2[key]
        )
            return false;
    }
    return true;
}

console.log(
    validAnagram("", ""), // true
    validAnagram("aaz", "zza"), // false
    validAnagram("anagram", "nagaram"), // true
    validAnagram("rat", "car"), // false) // false
    validAnagram("awesome", "awesom"), // false
    validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"), // false
    validAnagram("qwerty", "qeywrt"), // true
    validAnagram("texttwisttime", "timetwisttext"), // true
);
