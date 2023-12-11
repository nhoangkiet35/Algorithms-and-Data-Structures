// Here's how you can find the maximum depth of a binary tree using JavaScript,
// utilizing a similar recursive approach:
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maxDepth(root) {
    if (!root) {
        return 0;
    } else {
        let leftDepth = maxDepth(root.left);
        let rightDepth = maxDepth(root.right);

        // Adding 1 to account for the current node
        return Math.max(leftDepth, rightDepth) + 1;
    }
}

// Example usage:
// Create a sample binary tree
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
//     3
// 9       20
//     15      7
// Calculate the maximum depth
let depth = maxDepth(root);
console.log("Maximum depth of the binary tree:", depth);

root = new TreeNode(1);
root.left = new TreeNode(null);
root.right = new TreeNode(2);
depth = maxDepth(root);
console.log("Maximum depth of the binary tree:", depth);

/*

1. TreeNode class represents the structure of a node in the binary tree.
2. The maxDepth function recursively calculates the maximum depth of the binary tree by traversing through the tree and returning the maximum depth of its left and right subtrees, adding 1 for the current node.
3. An example binary tree is created, and the maxDepth function is called with its root node to find the maximum depth. The result is then printed to the console.

This recursive algorithm follows the principle of finding the maximum depth of the left subtree and the right subtree, then choosing the maximum between these depths and adding 1 for the current node.

*/
