// Task 4 : Write an async function that waits for a promise to resolve and then logs the resolved value

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Javascript2024", password: "2001" });
    }, 2000);
});

(async function consumePromiseOne() {
    const response = await promiseOne;
    console.log(response);
})();


// Task 5 : Write an async function that handles a rejected promise using try-catch and logs the error message

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve("Promise Resolved!");
        } else {
            reject(`Promise didn't resolved`);
        }
    }, 2000);
});

(async function consumePromiseTwo() {
    try {
        const response = await promiseTwo;
        console.log(response);
    } catch (error) {
        console.log(`Error : ${error}`);
    }
})();