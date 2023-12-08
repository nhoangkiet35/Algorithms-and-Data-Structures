/*
bạn có thể sử dụng cách tiếp cận tương tự với vấn đề 3Sum. 
Tuy nhiên, trong trường hợp này, bạn theo dõi tổng gần nhất được tìm thấy trong khi lặp qua mảng và 
cập nhật nó bất cứ khi nào gặp tổng gần hơn.
*/
function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array
    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            // find out the smallest value closest target
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum < target) left++;
            else right--;
        }
    }

    return closestSum;
}

// Test cases
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // Output: 2
console.log(threeSumClosest([0, 0, 0], 1)); // Output: 0

/*
Hàm threeSumClosest này lấy một mảng các số nguyên nums và một số nguyên target (mục tiêu) làm đầu vào. 
Nó sắp xếp mảng trước, sau đó lặp qua mảng trong khi duy trì hai con trỏ (left (trái) và right (phải)) để tìm ba số nguyên có tổng gần nhất với mục tiêu. 
Hàm liên tục cập nhật biến closestSum (Tổng gần nhất) bất cứ khi nào tìm thấy tổng gần hơn với mục tiêu. 
Cuối cùng, nó trả về số tiền gần nhất.
*/
