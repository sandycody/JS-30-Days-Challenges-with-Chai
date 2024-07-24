// Task 3 : Use finally block with try-catch

const prompt = require("prompt-sync")();

const getInput = (promptText) => {
    const input = prompt(promptText);

    if (isNaN(input)) {
        throw "Input is not a number! Try entering a number."
    }
    return Number(input);
};

(function squareNumber () {
    try {
        const num = getInput(`Enter a number : `);
        const square = num * num;
        console.log(`The square of ${num} is ${square}`);
    } catch (error) {
        console.log(`Error => ${error}`);
    } finally {
        console.log(`Thank you for using the function of squaring number.`);
    }
})();