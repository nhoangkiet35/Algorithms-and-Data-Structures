// để tạo phiên bản giới hạn thời gian của hàm không đồng bộ, bạn có thể sử dụng Promise.race() khi hết thời gian chờ.

function timeLimit(fn, t) {
    return async function (...args) {
        const executionPromise = fn(...args);
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });

        try {
            const result = await Promise.race([
                executionPromise,
                timeoutPromise,
            ]);
            return result;
        } catch (err) {
            throw err;
        }
    };
}

// Example usage:
const fn = async (n) => {
    await new Promise((res) => setTimeout(res, 10));
    return n * n;
};

const inputs = [5];
const t = 50;

const limited = timeLimit(fn, t);
const start = performance.now();
let result;

limited(...inputs)
    .then((res) => {
        result = { resolved: res, time: Math.floor(performance.now() - start) };
    })
    .catch((err) => {
        result = { rejected: err, time: Math.floor(performance.now() - start) };
    })
    .finally(() => {
        console.log(result); // Output
    });

/*
Trong code này:

1. timeLimit là một hàm lấy hàm không đồng bộ fn và giới hạn thời gian t làm đối số.
2. Nó trả về một hàm mới nhận số lượng đối số bất kỳ bằng cách sử dụng toán tử còn lại (...args).
3. Bên trong hàm này, nó thiết lập hai lời hứa: một để thực thi fn và một lời hứa khác là hết thời gian sử dụng setTimeout.
4. Nó sử dụng Promise.race() để chạy đua giữa việc thực thi hàm và thời gian chờ.
5. Nếu chức năng giải quyết trong thời gian giới hạn, nó sẽ trả về kết quả. Nếu vượt quá giới hạn thời gian, nó sẽ báo lỗi "Đã vượt quá giới hạn thời gian".
6. Cách sử dụng ví dụ minh họa cách sử dụng timeLimit với hàm không đồng bộ, đối số và giới hạn thời gian được cung cấp để xử lý cả trường hợp đã giải quyết và bị từ chối trong khung thời gian đã chỉ định.

*/
