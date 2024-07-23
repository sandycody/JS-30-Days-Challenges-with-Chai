// Task 1 : Create a promise which gets resolved

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 2000);
})

promise1.then((res) => {
    console.log(`Promise resolved with message ${res}`);
})


// Task 2 : Create a promise that rejects and handle it using .catch()
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve("Success!");
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 2000);
})

promise2.then((res) => {
    console.log(`Message resolved with ${res}`);
}).catch(err => {
    console.log(err);
})

