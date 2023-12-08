class TreeNode {
    constructor() {
        this.children = [];
    }
}

function buildTree(n, nodes) {
    const tree = new Array(n + 1).fill(null).map(() => new TreeNode());

    for (let i = 0; i < n; i++) {
        const [nodeIndex, m, ...children] = nodes[i];
        for (let j = 0; j < m; j++) {
            tree[nodeIndex].children.push(children[j]);
        }
    }

    return tree;
}

function calculatePebbles(tree, nodeIndex) {
    const children = tree[nodeIndex].children;
    if (children.length === 0) {
        return 1; // Leaf node, requires 1 pebble
    }

    const requiredPebbles = children.map((child) =>
        calculatePebbles(tree, child),
    );
    requiredPebbles.sort((a, b) => b - a); // Sort in descending order

    let pebblesNeeded = 0;
    for (let i = 0; i < requiredPebbles.length; i++) {
        pebblesNeeded = Math.max(pebblesNeeded, requiredPebbles[i] + i + 1);
        // The maximum pebbles needed is the maximum of (requiredPebbles[i] + i + 1)
    }

    return pebblesNeeded;
}

function minimumPebbles(n, nodes) {
    const tree = buildTree(n, nodes);
    const pebblesRequired = calculatePebbles(tree, 0); // Start traversal from root (node 1)
    return pebblesRequired;
}

// Sample Input
const n = 7;
const nodes = [
    [1, 2, 2, 3],
    [2, 2, 5, 4],
    [3, 2, 6, 7],
];

// Calculate minimum pebbles required
const result = minimumPebbles(3, nodes);
console.log(result); // Output: Minimum number of pebbles required
