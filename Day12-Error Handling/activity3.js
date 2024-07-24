// Task 4 : Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    let error = true;
    if (error) {
        throw new CustomError("There is problem in this code.");
    }
    return "Successful! There is no issue.";
} catch (err) {
    if (err instanceof CustomError) {
        console.error(`Caught a custom error: ${err.message}`);
    } else {
        console.error(`Unexpected Error occurred ${err}`);
    }
}


// Task 5 : Write a function that validates user input (e.g., Checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using try-catch block.

const prompt = require('prompt-sync')();

const getInput = (promptText) => {
    const input = prompt(promptText);

    if (input === "") {
        throw "String is empty";
    }
    return input;
}

const displayName = () => {
    try {
        const name = getInput(`Enter your Name : `);
        console.log(`Hey ${name}, Nice meeting you!!`);
    } catch (err) {
        console.log(`ERROR => ${err}`);
    }
}

displayName();