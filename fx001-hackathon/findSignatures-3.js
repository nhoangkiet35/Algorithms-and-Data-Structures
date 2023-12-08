// Hàm tìm đường đi ngắn nhất sử dụng thuật toán Dijkstra
function dijkstra(start, end, graph, costs) {
    const minCosts = Array(graph.length).fill(Infinity);
    const visited = Array(graph.length).fill(false);
    const queue = [];

    minCosts[start] = 0;
    queue.push([start, 0]);

    while (queue.length) {
        queue.sort((a, b) => a[1] - b[1]);
        const [currentNode, currentCost] = queue.shift();

        if (visited[currentNode]) continue;
        visited[currentNode] = true;

        if (currentNode === end) {
            return minCosts[end];
        }

        for (const neighbor of graph[currentNode]) {
            const [nextNode, nextRoom, cost] = neighbor;
            const totalCost = currentCost + cost;

            if (totalCost < minCosts[nextNode * N + nextRoom]) {
                minCosts[nextNode * N + nextRoom] = totalCost;
                queue.push([nextNode * N + nextRoom, totalCost]);
            }
        }
    }
    return minCosts[end];
}

// Đọc input
let readline = `3 4 4
10 10 1 10
2 2 2 10
1 10 10 1`;
const input = readline.split(" ").map(Number);
const M = input[0];
const N = input[1];
const P = input[2];

readline = readline.slice(3);

const costs = [];
for (let i = 0; i < M; i++) {
    const row = readline.split(" ").map(Number);
    costs.push(row);
}

// Tạo danh sách kề
const adjList = new Array(M * N).fill(null).map(() => []);

for (let i = 0; i < M - 1; i++) {
    for (let j = 0; j < N; j++) {
        if (i === 0) {
            adjList[j].push([i + 1, j, costs[i + 1][j]]);
        }
        adjList[i * N + j].push([i + 1, j, costs[i + 1][j]]);
        adjList[i * N + j].push([i + 1, j + 1, costs[i + 1][j + 1]]);

        if (j > 0) {
            adjList[i * N + j].push([i + 1, j - 1, costs[i + 1][j - 1]]);
        }
        adjList[i * N + j].push([i, j + 1, costs[i][j + 1]]);
    }
}
console.log(adjList);

// Tìm đường đi và chi phí
const startNode = (M - 1) * N + (P - 1);
const endNode = (M - 1) * N;

const minCost = dijkstra(startNode, endNode, adjList, costs);

// In kết quả
console.log(minCost + " " + M);
let path = [];
let currentNode = endNode;

while (currentNode !== startNode) {
    const i = Math.floor(currentNode / N) + 1;
    const j = (currentNode % N) + 1;
    path.push([i, j]);

    for (const neighbor of adjList[currentNode]) {
        const [ni, nj, _] = neighbor;
        if (minCosts[currentNode] === minCosts[ni * N + nj] + costs[ni][nj]) {
            currentNode = ni * N + nj;
            break;
        }
    }
}

path = path.reverse();
path.forEach(([i, j]) => console.log(i + " " + j));
