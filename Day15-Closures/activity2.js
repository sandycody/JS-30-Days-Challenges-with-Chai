// Task 3 : Write a function that generates unique ID's. Use a closure to keep track of the last generated ID and increment it with each call.

function generateID() {
    let id = Math.floor(Math.random() * 1000);
    
    function lastGeneratedID() {
        id++;
    }

    function getLastGeneratedID() {
        console.log(`The last generated id is ${id}`);
    }

    return { lastGeneratedID, getLastGeneratedID };
}

const trackID = generateID();

trackID.lastGeneratedID();
trackID.getLastGeneratedID();

trackID.lastGeneratedID();
trackID.getLastGeneratedID();

trackID.lastGeneratedID();
trackID.getLastGeneratedID();

trackID.lastGeneratedID();
trackID.getLastGeneratedID();

trackID.lastGeneratedID();
trackID.getLastGeneratedID();

trackID.lastGeneratedID();
trackID.getLastGeneratedID();

trackID.lastGeneratedID();
trackID.getLastGeneratedID();

console.log();

// Task 4 : Create a closure that captures a user's name and returns a function that greets the user by name.

function user() {
    const username = "John Doe";

    return function greet() {
        console.log(`Hey ${username}, Nice to see you!!`);
    }
}

user()();



