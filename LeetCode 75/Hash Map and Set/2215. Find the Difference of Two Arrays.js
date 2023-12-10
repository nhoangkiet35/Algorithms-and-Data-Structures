//
function findDifference(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const arr1 = [];
    const arr2 = [];

    for (const num of set1) {
        if (!set2.has(num)) {
            arr2.push(num);
        }
    }

    for (const num of set2) {
        if (!set1.has(num)) {
            arr1.push(num);
        }
    }

    return [arr2, arr1];

    // const s1 = new Set(nums1);
    // const s2 = new Set(nums2);

    // for (let num of nums1) {
    //     if (s2.has(num)) {
    //         s1.delete(num);
    //         s2.delete(num);
    //     }
    // }
    // return [Array.from(s1), Array.from(s2)];
}
let nums1 = [1, 2, 3],
    nums2 = [2, 4, 6];
console.log(findDifference(nums1, nums2));

(nums1 = [1, 2, 3, 3]), (nums2 = [1, 1, 2, 2]);
console.log(findDifference(nums1, nums2));
