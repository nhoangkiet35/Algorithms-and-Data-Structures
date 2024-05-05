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
var longestZigZag = function (root) {
    let max = 0;

    // Helper function
    function recursiveTraversal(node, parent) {
        if (!node) {
            return 0;
        }

        const left = recursiveTraversal(node.left, "left");
        const right = recursiveTraversal(node.right, "right");

        max = Math.max(left, right, max);

        if (parent === "left") {
            return 1 + right;
        }

        return 1 + left;
    }

    recursiveTraversal(root);
    return max;
};
