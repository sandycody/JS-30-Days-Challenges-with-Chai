// Task 3 : Chaining of Promises

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false; 
        if (!error) {
            resolve({ username: "Sandeep", email: "sandy@test.com" });
        } else { 
            reject(`ERROR: Fetching the data`);
        }
    }, 2000);
})

promise.then((user) => {
    console.log(user);
    return user.email;
}).then(data => {
    console.log(data);
}).catch(err => console.log(err));
