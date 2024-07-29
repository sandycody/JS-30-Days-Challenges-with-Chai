// Task 3 : Implement a Stack class with methods push (add element), pop (remove element) and peek (view the top element).

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
        console.log(`Element ${element} is pushed into stack`);
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Underflow");
            return "Underflow";
        }
        const poppedElement = this.items.pop();
        // console.log(`Element ${poppedElement} popped out from the stack`);
        return poppedElement;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return "No element is present in stack."
        }
        return this.items[this.items.length - 1];
    }

    displayStackElements() {
        let items = "";
        for (let i = 0; i < this.items.length; i++) {
            items += this.items[i] + " ";
        }
        return items;
    }
}

const stack = new Stack();

stack.push(4);
stack.push(60);
stack.push(32);
stack.push(12);
stack.push(79);

console.log();

console.log(`The elements present in stack are : ${stack.displayStackElements()}`);

stack.pop();
stack.pop();
console.log();

console.log(`The elements present in stack are : ${stack.displayStackElements()}`);

console.log();

// Task 4 : Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

const st = new Stack();
const string = "father";

for (let char of string) {
    st.push(char);
}
console.log();

console.log(`The string becomes : ${st.displayStackElements().split('').filter(char => char !== ' ').join('')}`);

let reversedString = ""; 
while (!st.isEmpty()) {
    reversedString += st.pop();
}

console.log(`The reversed string becomes: ${reversedString}`);