// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// (Frequency Counter)
function areThereDuplicates(...numbers) {
    // good luck. (supply any arguments you deem necessary.)
    if (numbers.length === 0) return false;
    const frequency = {};
    for (const item of numbers) {
        frequency[item] = ++frequency[item] || 1;
        if (frequency[item] > 1) {
            return true;
        }
    }
    return false;
}

// (Multiple Pointers)
function areThereDuplicates(...args) {
    args.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}

// One Liner Solution
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

console.log(
    areThereDuplicates(1, 2, 3), // false
    areThereDuplicates(1, 2, 2), // true
    areThereDuplicates("a", "b", "c", "a"), // true
);
