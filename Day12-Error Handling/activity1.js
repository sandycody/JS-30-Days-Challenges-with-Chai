// Task 1 : Create a function that intentionally throw an error and handle it using try-catch block

const errorFunction = () => {
    try {
        let username = "Sandeep Wadhawan";
        analert(`Hello ${username}`);
    } catch (error) {
        console.log(`Error => ${error}`);
    }
}

errorFunction();

// Task 2 : Create a function that in division denominator is zero and handle it using try-catch

const prompt = require("prompt-sync")();

const getInput = (promptText) => {
    const input = prompt(promptText);

    if (isNaN(input)) {
        throw "Input is not a number! Try entering a number."
    }
    if (input == 0) {
        throw "Division by zero is not possible."
    }
    return Number(input);
}

const division = () => {
    try {
        const num1 = getInput(`Enter first number : `);
        const num2 = getInput(`Enter second number : `);
        const div = num1 / num2;
        console.log(`The division of ${num1} and ${num2} is ${div}`);
    } catch (err) {
        console.log(`Error => ${err}`);
    }
}
division();