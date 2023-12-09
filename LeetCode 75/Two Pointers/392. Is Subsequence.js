function isSubsequence(s, t) {
    let index = 0;
    for (let i = 0; i < t.length && index < s.length; i++) {
        if (s[index] === t[i]) {
            index++;
        }
    }
    return index === s.length;

    // let sPtr = 0;
    // let tPtr = 0;

    // while (sPtr < s.length && tPtr < t.length) {
    //     if (s[sPtr] === t[tPtr]) {
    //         sPtr++;
    //     }
    //     tPtr++;
    // }

    // return sPtr === s.length;
}

console.log(isSubsequence("abc", "ahbgdc")); // Output: true
console.log(isSubsequence("axc", "ahbgdc")); // Output: false
