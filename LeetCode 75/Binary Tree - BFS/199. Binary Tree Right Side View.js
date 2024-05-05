class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function rightSideView(root) {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;

        // Iterate through the current level
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            // The last node in the level is the rightmost one
            if (i === levelSize - 1) {
                result.push(node.val);
            }

            // Enqueue the child nodes for the next level
            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return result;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);

console.log(rightSideView(root)); // Output: [1, 3, 4]
