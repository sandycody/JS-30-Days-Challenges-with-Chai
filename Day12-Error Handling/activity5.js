// Task 8 : Use fetch API to request data from an invalid URL and handle it using .catch()

fetch('https://ai.github.com/users/sandycody')
.then(res => {
    return res.json();
}).then(data => {
    console.log(`The avatar url is ${data.avatar_url}`);
}).catch(err => {
    console.log(`ERROR : ${err}`);
});

// Output => ERROR : SyntaxError: Unexpected token < in JSON at position 0

// Task 9 : Use fetch API to request data from an invalid URL within async function and handle it using try-catch

(async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typecode.com/todos');
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(`ERROR : ${err}`);
    }
})(); 

// Output => ERROR : TypeError: fetch failed