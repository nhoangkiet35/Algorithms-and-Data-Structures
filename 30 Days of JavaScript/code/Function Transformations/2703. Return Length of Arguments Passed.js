function argumentsLength(...args) {
    return args.length;
}

// Test cases
const args1 = [5];
const output1 = argumentsLength(...args1);
console.log(output1); // Output: 1

const args2 = [{}, null, "3"];
const output2 = argumentsLength(...args2);
console.log(output2); // Output: 3
