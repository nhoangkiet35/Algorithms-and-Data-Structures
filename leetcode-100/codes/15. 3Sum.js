/*
Để giải quyết vấn đề này trong JavaScript, 
bạn có thể sử dụng vòng lặp lồng nhau để tìm tất cả các bộ ba có thể có trong mảng có tổng bằng 0. 
Sắp xếp mảng trước để dễ dàng xử lý các bản sao và hỗ trợ tìm kiếm các bộ ba duy nhất.
*/
function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // Skip duplicates
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let left = i + 1;
            let right = nums.length - 1;
            const target = 0 - nums[i];

            while (left < right) {
                const sum = nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[left], nums[right]]);
                    // Skip duplicates
                    while (left < right && nums[left] === nums[left + 1])
                        left++;
                    while (left < right && nums[right] === nums[right - 1])
                        right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4, 4, 4])); // Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // Output: []
console.log(threeSum([0, 0, 0])); // Output: [[0,0,0]]

/*
Hàm threeSum này lấy một mảng các số nguyên nums làm đầu vào và 
lặp qua mảng đó bằng một vòng lặp để tìm tất cả các bộ ba có thể có tổng bằng 0. 
Nó tránh trùng lặp bằng cách bỏ qua các giá trị giống nhau trong quá trình lặp và 
xử lý các trường hợp cạnh trong đó tất cả các phần tử đều bằng 0 
hoặc nếu không có bộ ba nào có thể có tổng bằng 0.
*/
