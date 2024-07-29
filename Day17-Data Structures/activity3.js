// Task 5 : Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element)

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue Underflow");
            return "Queue Underflow";
        } else {
            return this.items.shift();
        }
    }

    front() {
        if (this.isEmpty()) {
            console.log(`Queue is empty`);
            return;
        }  else {
            return this.items[0];
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    displayQueue() {
        return this.items.join(', ');
    }
}

const q = new Queue();

q.enqueue(34);
q.enqueue(56);
q.enqueue(19);
q.enqueue(60);
q.enqueue(75);
q.enqueue(100);
q.enqueue(40);

console.log(`The items present in queue are : ${q.displayQueue()}`);

console.log(`${q.dequeue()} is removed from front`);
console.log(`${q.dequeue()} is removed from front`);
console.log(`${q.dequeue()} is removed from front`);

console.log();

console.log(`The items present in queue are : ${q.displayQueue()}`);
console.log();

console.log(`The front element is ${q.front()}`);
console.log(`The items present in queue are : ${q.displayQueue()}`);

console.log();

// Task 6 : Use a Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order. 

class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addJob(printJob) {
        this.queue.enqueue(printJob);
        console.log(`Job added : ${printJob}`);
    }

    processJob() {
        if (this.queue.isEmpty()) {
            console.log(`No jobs to process`);
            return;
        }
        const job = this.queue.dequeue();
        console.log(`Processing job: ${job}`);
    }

    viewNextJob() {
        const job = this.queue.front();
        if (job === null) {
            console.log(`No jobs in queue`);
        } else {
            console.log(`The next job is ${job}`);
        }
    }

    displayQueue() {
        if (this.queue.isEmpty()) {
            console.log("The queue is empty.");
        } else {
            console.log(`Current queue : ${this.queue.displayQueue()}`);
        }
    }
}

const queue = new PrinterQueue();

queue.addJob("Software Developer");
queue.addJob("Frontend Engineer");
queue.addJob("UI/UX Designer");
queue.addJob("Backend Developer");
queue.addJob("ReactJS Developer");
queue.addJob("Java Developer");

console.log();

queue.displayQueue();
console.log();

queue.processJob();
console.log();

queue.processJob();
console.log();

queue.viewNextJob();
console.log();

queue.displayQueue();
