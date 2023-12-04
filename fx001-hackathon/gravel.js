class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function buildTree(arr) {
    const nodes = {};
    for (let i = 1; i <= arr.length; i++) {
        nodes[i] = new Node(i);
    }

    for (let i = 0; i < arr.length; i++) {
        const [parent, count, ...children] = arr[i];
        for (let j = 0; j < count; j++) {
            nodes[parent].children.push(nodes[children[j]]);
        }
    }

    return nodes[1];
}

function minStonesRequired(root) {
    if (root.children.length === 0) {
        return 1;
    }

    let totalStones = 0;
    let requiredStones = 0;

    for (let i = 0; i < root.children.length; i++) {
        const childStones = minStonesRequired(root.children[i]);
        totalStones += childStones;
        requiredStones = Math.max(requiredStones, childStones);
    }

    return Math.max(requiredStones, Math.ceil(totalStones / 2));
}

// Input example
const n = 7;
const tree = [
    [1, 2, 2, 3],
    [2, 1, 4],
    [3, 0],
    [4, 2, 5, 6],
    [5, 0],
    [6, 0],
    [7, 0],
];

const rootNode = buildTree(tree);
const minStones = minStonesRequired(rootNode);
console.log("Số lượng viên sỏi tối thiểu cần thiết:", minStones);
