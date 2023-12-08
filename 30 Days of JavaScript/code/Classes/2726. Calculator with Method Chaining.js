class Calculator {
    constructor(initialValue) {
        this.result = initialValue;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }

    power(value) {
        this.result **= value;
        return this;
    }

    getResult() {
        return this.result;
    }
}

// Example usage:
function performActions(actions, values) {
    let calc = null;
    let result = null;

    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const value = values[i];

        if (action === "Calculator") {
            calc = new Calculator(value);
        } else {
            try {
                result = calc[action](value);
            } catch (error) {
                result = error.message;
                break;
            }
        }
    }

    return result;
}

// Example 1:
const actions1 = ["Calculator", "add", "subtract", "getResult"];
const values1 = [10, 5, 7];
console.log(performActions(actions1, values1)); // Output: 8

// Example 2:
const actions2 = ["Calculator", "multiply", "power", "getResult"];
const values2 = [2, 5, 2];
console.log(performActions(actions2, values2)); // Output: 100

// Example 3:
const actions3 = ["Calculator", "divide", "getResult"];
const values3 = [20, 0];
console.log(performActions(actions3, values3)); // Output: "Division by zero is not allowed"
