/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
*/
function sameFrequency(number1, number2) {
    // good luck. Add any arguments you deem necessary.
    let num1 = number1.toString(),
        num2 = number2.toString(),
        lookup = {};
    if (num1.length !== num2.length) {
        return false;
    }
    for (const item of num1) {
        lookup[item] = ++lookup[item] || 1;
    }

    for (const item of num2) {
        if (!lookup[item]) {
            return false;
        } else {
            --lookup[item];
        }
    }

    return true;
}

console.log(
    sameFrequency(182, 281), // true
    sameFrequency(34, 14), // false
    sameFrequency(3589578, 5879385), // true
    sameFrequency(22, 222), // false
);
