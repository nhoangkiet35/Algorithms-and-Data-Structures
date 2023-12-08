function createCounter(init) {
    let currentValue = init;

    return {
        increment: function () {
            currentValue++;
            return currentValue;
        },
        decrement: function () {
            currentValue--;
            return currentValue;
        },
        reset: function () {
            currentValue = init;
            return currentValue;
        },
    };
}

// Test case execution
const calls1 = ["increment", "reset", "decrement"];
const counter1 = createCounter(5);
const output1 = calls1.map((call) => counter1[call]());

console.log(output1); // Output: [6, 5, 4]

const calls2 = ["increment", "increment", "decrement", "reset", "reset"];
const counter2 = createCounter(0);
const output2 = calls2.map((call) => counter2[call]());

console.log(output2); // Output: [1, 2, 1, 0, 0]
