function once(fn) {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            called = true;
            result = fn(...args);
            return result;
        }
        return undefined;
    };
}

// Test case
const fn1 = (a, b, c) => a + b + c;
const calls1 = [
    [1, 2, 3],
    [2, 3, 6],
];
const onceFn1 = once(fn1);

const output1 = calls1.map((call) => ({
    value: onceFn1(...call),
    calls: onceFn1(...call) !== undefined ? 1 : 0,
}));

console.log(output1); // Output: [{"calls":1,"value":6}]

const fn2 = (a, b, c) => a * b * c;
const calls2 = [
    [5, 7, 4],
    [2, 3, 6],
    [4, 6, 8],
];
const onceFn2 = once(fn2);

const output2 = calls2.map((call) => ({
    value: onceFn2(...call),
    calls: onceFn2(...call) !== undefined ? 1 : 0,
}));

console.log(output2); // Output: [{"calls":1,"value":140},{"calls":0,"value":undefined},{"calls":0,"value":undefined}]
