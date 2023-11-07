function addToUp1(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += i;
    }
    return total;
}

function addToUp2(n) {
    return (n * (n + 1)) / 2;
}

var t1 = performance.now();
// addToUp1(100_000_000);
addToUp2(100_000_000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
