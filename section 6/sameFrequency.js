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
    console.log(lookup);

    for (const item of num2) {
        if (!lookup[item]) {
            return false;
        } else {
            --lookup[item];
        }
    }

    return true;
}

console.log(sameFrequency(122, 321));
