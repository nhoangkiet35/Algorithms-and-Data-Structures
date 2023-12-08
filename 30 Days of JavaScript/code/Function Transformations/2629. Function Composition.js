function composeFunctions(functions) {
    return function (x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
}

// Test cases
const functions1 = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
const input1 = 4;
const composedFn1 = composeFunctions(functions1);
const output1 = composedFn1(input1);
console.log(output1); // Output: 65

const functions2 = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
const input2 = 1;
const composedFn2 = composeFunctions(functions2);
const output2 = composedFn2(input2);
console.log(output2); // Output: 1000

const functions3 = [];
const input3 = 42;
const composedFn3 = composeFunctions(functions3);
const output3 = composedFn3(input3);
console.log(output3); // Output: 42
