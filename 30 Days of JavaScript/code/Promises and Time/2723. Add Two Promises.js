// Trong JavaScript, bạn có thể sử dụng phương thức Promise.all() để xử lý nhiều promise và thực hiện một hành động khi tất cả chúng đã được giải quyết.
async function sumOfPromises(promise1, promise2) {
    return (
        Promise.all([promise1, promise2])
            // .then((values) => {
            //     const sum = values.reduce((acc, curr) => acc + curr, 0);
            //     return Promise.resolve(sum);
            // })
            .then(([result1, result2]) => result1 + result2)
            .catch((error) => {
                // Handle errors if any of the promises reject
                return Promise.reject(error);
            })
    );
    // const [value1, value2] = await Promise.all([promise1, promise2]);
    // return value1 + value2;
}

// Example usage:
const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 200));
// const promise = new Promise((resolve) => setTimeout(resolve, 200, 2));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 600));

sumOfPromises(promise1, promise2)
    .then((result) => {
        console.log("Output:", result); // Output: 7
    })
    .catch((error) => {
        console.error("Error occurred:", error);
    });

/*
Trong code này: 
sumOfPromises là một hàm lấy hai lời hứa (promise1 và Promise2) làm đối số. 
Promise.all() được sử dụng để chờ cả hai lời hứa được giải quyết. 
Khi cả hai promise đã được giải quyết, các giá trị sẽ được tổng hợp bằng cách sử dụng reduce() trong khối then. 
Cuối cùng, số tiền được trả lại như một lời hứa đã được giải quyết. 

Bạn có thể sử dụng hàm sumOfPromises này với bất kỳ lời hứa nào được giải quyết bằng số và hàm này sẽ trả về một lời hứa mới được giải quyết bằng tổng giá trị của chúng.
*/
