/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
    // Helper function
    function dfs(node, maxSoFar) {
        if (!node) return 0;

        const isGoodNode = node.val >= maxSoFar;
        const newMax = Math.max(node.val, maxSoFar);

        const countLeft = dfs(node.left, newMax);
        const countRight = dfs(node.right, newMax);

        return (isGoodNode ? 1 : 0) + countLeft + countRight;
    }

    return dfs(root, Number.NEGATIVE_INFINITY);
};

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
// Example usage:
const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(null);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(5);

console.log(goodNodes(root)); // Output: 4
