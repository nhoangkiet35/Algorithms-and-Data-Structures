function checkCondition(arr, m, n) {
    for (const p of arr) {
        if (p !== m && p !== n && 2 * p === m + n) return false;
    }
    return true;
}

function permutations(arr, l, r, result) {
    if (l === r) {
        result.push([...arr]);
    } else {
        for (let i = l; i < r + 1; i++) {
            [arr[l], arr[i]] = [arr[i], arr[l]];
            permutations(arr, l + 1, r, result);
            [arr[l], arr[i]] = [arr[i], arr[l]];
        }
    }
}

function findPermutations(arr) {
    let n = arr.length;
    let result = [];
    permutations(arr, 0, n - 1, result);
    console.log(result.length, n);
    let validPermutations = [];

    let valid = false;
    for (const perm of result) {
        valid = true;
        let left = 0;
        let right = n - 1;
        // for (let i = 0; i < n; i++) {
        //     for (let j = n - 1; j >= 0; j--) {
        //         if (i >= j) break;
        while (left < right) {
            if (!checkCondition(perm, perm[left], perm[right])) {
                valid = false;
            }
            left++;
            right--;
        }
        //     }
        //     if (!valid) {
        //         break;
        //     }
        // }
        if (valid) {
            validPermutations.push(perm);
        }
    }
    return validPermutations;
}

let array = [11, 22, 33, 44];
let validPerms = findPermutations(array);
validPerms.forEach((perm) => console.log(perm));

console.log(validPerms.length);
