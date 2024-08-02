class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let isValidParenthesis = (str) => {
    let stack = new Stack();

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else {
            if (stack.isEmpty()) return false;

            if ((stack.peek() === '(' && ch === ')') ||   
                (stack.peek() === '{' && ch === '}') || 
                (stack.peek() === '[' && ch === ']')) {
                    stack.pop();
            }
            else return false;
        }
    }
    if (stack.isEmpty()) return true;
    return false;
}

let string = "()[]{}";

if (isValidParenthesis(string)) {
    console.log(`"${string}" is a valid parenthesis.`);
} else {
    console.log(`"${string}" is not a valid parenthesis.`);
}

console.log();

string = "([)]";
if (isValidParenthesis(string)) {
    console.log(`"${string}" is a valid parenthesis.`);
} else {
    console.log(`"${string}" is not a valid parenthesis.`);
}