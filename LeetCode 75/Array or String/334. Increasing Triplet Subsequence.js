function increasingTriplet(nums) {
    let first = (second = Infinity);

    for (const num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            return true;
        }
    }
    return false;

    // sliding window pattern
    // let flattened = false;
    // if (nums.length < 3) return false;

    // if (nums[0] < nums[1] && nums[1] < nums[2]) flattened = true;

    // for (let i = 3; i < nums.length; i++) {
    //     if (nums[i - 2] < nums[i - 1] && nums[i - 1] < nums[i]) {
    //         flattened = true;
    //     }
    // }
    // return flattened;
}

let nums = [1, 4, 2, 5, 3];
console.log(increasingTriplet(nums));
nums = [5, 4, 3, 2, 1];
console.log(increasingTriplet(nums));
nums = [2, 1, 5, 0, 4, 5];
console.log(increasingTriplet(nums));
// Hàm JavaScript tăngTriplet này sử dụng cách tiếp cận tương tự như được mô tả trước đây.
// Nó lặp qua mảng nums, cập nhật biến thứ nhất và biến thứ hai.
// Nếu nó tìm thấy một số lớn hơn cả số thứ nhất và số thứ hai, nó sẽ trả về true cho biết sự hiện diện của bộ ba tăng dần.
// Nếu không tìm thấy bộ ba như vậy, nó sẽ trả về sai.
