// Task 1  : Implement a Node class to represent an element in a linked list with properties value and next.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Task 2 : Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes

class ListNode {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addNode(nodeData) {
        const newNode = new Node(nodeData);

        if (this.head === null) {
            // List is empty then head and tail point to same node
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    removeNode() {
        if (this.head === null) return null;

        // If there is only one node
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
        this.size--;
    }

    displayNodes() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let list = new ListNode();
list.addNode(100);
list.addNode(200);
list.addNode(300);
list.addNode(400);
list.addNode(500);
list.addNode(600);
list.addNode(700);

console.log("List after adding nodes: ");
list.displayNodes();
console.log();

list.removeNode();
list.removeNode();

console.log();

console.log("List after removing nodes: ");
list.displayNodes();
