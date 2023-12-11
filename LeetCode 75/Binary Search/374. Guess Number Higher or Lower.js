// to solve this problem in JavaScript using the provided guess API,
// you can use a binary search algorithm to efficiently find the number that has been picked.
function guess(num) {
    if (num > pick) {
        return -1;
    } else if (num < pick) {
        return 1;
    } else {
        return 0;
    }
}
function guessNumber(n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        // mid = low + (high - low) /2
        // mid = (high + low) / 2
        let mid = Math.floor(left + (right - left) / 2);
        console.log("mid = " + mid);
        let result = guess(mid);

        if (result === 0) {
            return mid; // Number picked
        } else if (result === 1) {
            left = mid + 1; // Adjusting the search range
        } else {
            right = mid - 1; // Adjusting the search range
        }
    }

    return -1; // Number not found, shouldn't happen in this context
}

let n = 10,
    pick = 6;
console.log(guessNumber(n));
(n = 1), (pick = 1);
console.log(guessNumber(n));
(n = 2), (pick = 1);
console.log(guessNumber(n));
