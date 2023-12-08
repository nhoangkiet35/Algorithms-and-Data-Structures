class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }

    // Overloading the addition operator to sum the arrays
    static addArrays(arr1, arr2) {
        const sum =
            arr1.reduce((acc, val) => acc + val, 0) +
            arr2.reduce((acc, val) => acc + val, 0);
        return sum;
    }

    // Overriding the addition operator
    static [Symbol.toPrimitive](obj, hint) {
        if (hint === "default") {
            return ArrayWrapper.addArrays(obj.nums, []);
        }
    }

    // Overriding the toString method to return the string representation
    toString() {
        return `[${this.nums.join(",")}]`;
    }
}

// Example usage:
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2); // Output: 10

const obj = new ArrayWrapper([23, 98, 42, 70]);
console.log(String(obj)); // Output: "[23,98,42,70]"

const obj3 = new ArrayWrapper([]);
const obj4 = new ArrayWrapper([]);
console.log(obj3 + obj4); // Output: 0
