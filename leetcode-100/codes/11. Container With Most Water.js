/*
Nhiệm vụ ở đây là tìm hai dòng trong mảng chiều cao mà khi kết hợp với trục x sẽ tạo thành một thùng chứa nhiều nước nhất. 
Mục đích là tối đa hóa diện tích của container.
*/
function maxArea(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        const area = h * w;
        maxWater = Math.max(maxWater, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
}

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); // Output: 1

/*
Hàm này sử dụng cách tiếp cận hai con trỏ bắt đầu từ cả hai đầu của mảng (trái và phải). 
Nó tính diện tích bằng cách sử dụng chiều cao tối thiểu của hai đường và khoảng cách giữa chúng (chiều rộng). 
Sau đó, nó cập nhật giá trị nước tối đa trong khi di chuyển con trỏ vào trong dựa trên cạnh nào có chiều cao nhỏ hơn, 
vì việc tăng chiều rộng trong khi vẫn giữ chiều cao lớn hơn có thể dẫn đến diện tích thùng chứa lớn hơn.
*/
