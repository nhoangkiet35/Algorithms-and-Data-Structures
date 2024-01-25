function averagePair(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2;
        if (avg === num) return true;
        else if (avg < num) start++;
        else end--;
    }
    return false;
}

var t1 = performance.now();
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
