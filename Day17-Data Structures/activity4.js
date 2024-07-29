// Task 7 : Implement a TreeNode class to represent a node in a binary tree with properties value, left and right.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Task 8 : Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class BinaryTree {
    constructor() {
        this.root = null;
    }

    isTreeEmpty() {
        return this.root === null;
    }

    createTree(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    inOrderTraversal() {
        const result = [];
        this.traversal(this.root, result);
        return result;
    }

    traversal(node, result) {
        if (node !== null) {
            this.traversal(node.left, result);
            result.push(node.value);
            this.traversal(node.right, result);

        }
    }
}


const tree = new BinaryTree();

tree.createTree(23);
tree.createTree(14);
tree.createTree(10);
tree.createTree(45);
tree.createTree(32);
tree.createTree(50);
tree.createTree(3);

console.log("In-Order Traversal : ");
console.log(tree.inOrderTraversal());