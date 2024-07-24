// Task 6 : Create a promise that and if it is not resolved then handle it using .catch()

new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "John Doe", email: "john@gmail.com" });
        } else {
            reject(`Promise not resolved`);
        }
    }, 2000);
}).then(res => {
    console.log(`The username is ${res["username"]} and email is ${res["email"]}`);
}).catch(err => {
    console.log(`ERROR: ${err}`);
})


// Task 7 : Use try-catch within async function

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "Janathan", email: "jan@gmail.com" });
        } else {
            reject(`Promise didn't resolved`);
        }
    }, 2000);
});

(async function consumePromise() {
    try {
        const response = await promise;
        console.log(`The username is ${response["username"]} and the email is ${response[email]}`);
    } catch (error) {
        console.log(`ERROR : ${error}`);
    }
})();