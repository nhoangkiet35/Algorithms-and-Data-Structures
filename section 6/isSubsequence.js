function isSubsequence(first, second) {
    // good luck. Add any arguments you deem necessary.
    let i = 0,
        j = 0;
    // let lookup = [];
    if (first.length) return false;

    while (j < second.length) {
        if (first[i] === second[j]) {
            // lookup = lookup.concat(second[j]);
            i++;
        }
        j++;
    }

    if (i !== first.length) {
        return false;
    }
    // if (lookup.length !== first.length) {
    //     return false;
    // }

    return true;
}

var t1 = performance.now();
isSubsequence("hello", "hello world"); // true
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

console.log(
    isSubsequence("hello", "hello world"), // true
    isSubsequence("sing", "sting"), // true
    isSubsequence("abc", "abracadabra"), // true
    isSubsequence("abc", "acb"), // false (order matters)
);
