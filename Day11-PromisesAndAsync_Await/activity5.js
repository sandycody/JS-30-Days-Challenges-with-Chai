// Task 8 : Use Promise.all to wait for multiple promises to resolve and then log all their values.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 5000);
});

Promise.all([promise1, promise2, promise3]).then((results) => {
    console.log("All promises resolved");
    console.log(results);
});

// Task 9 : Use Promise.race to log the value of the first promise that resolves among multiple promises.

Promise.race([promise1, promise2, promise3]).then(result => {
    console.log(result);
})