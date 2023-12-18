class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // accepts a value and inserts it into the BST in the correct position.
    // The function should return the binary search tree.
    // insert(value) {
    //     let newNode = new Node(value);
    //     if (this.root === null) {
    //         this.root = newNode;
    //         return this;
    //     }
    //     let current = this.root;
    //     while (true) {
    //         if (value === current.value) return undefined;
    //         if (value < current.value) {
    //             if (current.left === null) {
    //                 current.left = newNode;
    //                 return this;
    //             }
    //             current = current.left;
    //         } else {
    //             if (current.right === null) {
    //                 current.right = newNode;
    //                 return this;
    //             }
    //             current = current.right;
    //         }
    //     }
    // }
    insert(value) {
        // only accept numbers....watch out since NaN is typeof number!
        if (typeof value === "number" && !isNaN(value)) {
            // if there is nothing in the tree, start it off with a new node!
            if (this.root === null) {
                this.root = new Node(value);
                return this;
            } else {
                // current variable used for traversal, just like linked lists!
                var current = this.root;
                // keep looping till we get to the correct spot;
                while (true) {
                    if (value < current.value) {
                        // if there is nothing on the left
                        if (current.left === null) {
                            // make a new node and get out
                            current.left = new Node(value);
                            return this;
                        }
                        // otherwise, keep moving on!
                        else {
                            current = current.left;
                        }
                    } else if (value > current.value) {
                        // if there is nothing on the right
                        if (current.right === null) {
                            // make a new node and get out
                            current.right = new Node(value);
                            return this;
                        } else {
                            current = current.right;
                        }
                    }
                    // otherwise it must be a duplicate so let's get out of here
                    else {
                        return "duplicate!";
                    }
                }
            }
        } else return "Please insert a number";
    }

    find(value) {
        if (this.root === null) return false;
        let current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

    // This function should search through each node in the binary search tree using breadth first search and return an array containing each node's value.
    BFS() {
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    // This function should search through each node in the binary search tree using pre-order depth first search and return an array containing each node's value.
    DFSPreOrder() {
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    // This function should search through each node in the binary search tree using in-order depth first search and return an array containing each node's value.
    DFSInOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    // This function should search through each node in the binary search tree using post-order depth first search and return an array containing each node's value.
    DFSPostOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    // Helper function to get the maximum height of the tree
    getHeight(node) {
        if (!node) return 0;
        const leftHeight = this.getHeight(node.left);
        const rightHeight = this.getHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Helper function to print the tree visually
    printTree() {
        const height = this.getHeight(this.root);
        const width = 2 ** height - 1;

        const printNode = (node, level, position) => {
            if (!node) return;

            const mid = Math.floor((position.start + position.end) / 2);
            this.result[level][mid] = `${node.value}`;

            if (node.left) {
                printNode(node.left, level + 1, {
                    start: position.start,
                    end: mid - 1,
                });
            }
            if (node.right) {
                printNode(node.right, level + 1, {
                    start: mid + 1,
                    end: position.end,
                });
            }
        };

        this.result = Array.from({ length: height }, () =>
            Array(width).fill(" "),
        );
        printNode(this.root, 0, { start: 0, end: width - 1 });

        for (let row = 0; row < height; row++) {
            console.log(this.result[row].join(""));
        }
    }

    // Function to initiate printing the tree
    print() {
        this.printTree(this.root);
    }

    // This function should remove a node from a binary search tree.
    // Your remove function should be able to handle removal of the root node,
    // removal of a node with one child and removal of a node with two children.
    // The function should return the node removed.
    remove(value) {
        const removeNode = (node, value) => {
            if (!node) {
                return null;
            }

            if (value === node.value) {
                // Node to be removed found

                if (!node.left && !node.right) {
                    // Node has no children
                    return null;
                }

                if (!node.left) {
                    // Node has no left child
                    return node.right;
                }

                if (!node.right) {
                    // Node has no right child
                    return node.left;
                }

                // Node has two children
                let tempNode = node.right;
                while (tempNode.left) {
                    tempNode = tempNode.left;
                }
                node.value = tempNode.value;
                node.right = removeNode(node.right, tempNode.value);
                return node;
            } else if (value < node.value) {
                node.left = removeNode(node.left, value);
                return node;
            } else {
                node.right = removeNode(node.right, value);
                return node;
            }
        };

        this.root = removeNode(this.root, value);
    }

    findSecondLargest() {
        if (!this.root || (!this.root.left && !this.root.right)) {
            return undefined; // Tree is empty or has only one node
        }

        let parent = null;
        let current = this.root;

        // Traverse right until the largest node is found
        while (current.right) {
            parent = current;
            current = current.right;
        }

        // If the largest node has a left subtree, the second largest is the largest in that subtree
        if (current.left) {
            current = current.left;
            while (current.right) {
                current = current.right;
            }
            return current.value;
        }

        // If the largest node has no left subtree and it's not the root,
        // the second largest is its parent node
        if (parent) {
            return parent.value;
        }

        // If the largest node has no left subtree and has no parent (root is the largest),
        // then the second largest doesn't exist in this case
        return undefined;
    }

    // Function to check if the tree is balanced
    // isBalanced - returns true if the BST is balanced, otherwise returns false.
    // A balanced tree is defined as a tree where the depth of all leaf nodes or nodes with single children differ by no more than one.
    isBalanced() {
        const checkBalanced = (node) => {
            if (!node) {
                return true;
            }

            const leftHeight = this.getHeight(node.left);
            const rightHeight = this.getHeight(node.right);

            if (
                Math.abs(leftHeight - rightHeight) <= 1 &&
                checkBalanced(node.left) &&
                checkBalanced(node.right)
            ) {
                return true;
            }

            return false;
        };

        return checkBalanced(this.root);
    }
}

// Examples

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log(binarySearchTree.isBalanced()); // true
console.log(
    binarySearchTree.root.value, // 15
    binarySearchTree.root.right.value, // 20
    binarySearchTree.root.left.right.value, // 12
);

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15).insert(20).insert(10).insert(12);
console.log(
    binarySearchTree.root.value, // 15
    binarySearchTree.root.right.value, // 20
    binarySearchTree.root.left.right.value, // 12
);

let foundNode = binarySearchTree.find(20);
console.log(
    foundNode.value, // 20
    foundNode.left, // null
    foundNode.right, // null
);

console.log("Before removal:");
// breadthFirstSearch
console.log(
    binarySearchTree.BFS(), // [ 15, 10, 20, 12 ]
);
// Remove the node from the root
binarySearchTree.remove(10);
console.log("After removing node with value 10:");
console.log(
    binarySearchTree.BFS(), // [ 15, 20, 12 ]
);

// DFSPreOrder
var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);

console.log("Second largest node:", binarySearchTree.findSecondLargest());

// console.log(
//     binarySearchTree.DFSPreOrder(), // [15, 10, 1, 5, 12, 20, 50]
// );
// binarySearchTree.print();

// // DFSInOrder
// console.log(
//     binarySearchTree.DFSInOrder(), // [1, 5, 10, 12, 15, 20, 50]
// );
// binarySearchTree.print();

// // DFSPostOrder
// console.log(
//     binarySearchTree.DFSPostOrder(), // [5, 1, 12, 10, 50, 20, 15]
// );
binarySearchTree.print();
