// Task 6 : Use fetch API to get data using promises

fetch('https://api.github.com/users/sandycody')
.then((res) => {
    return res.json();
}).then(data => {
    console.log(`Login name is : ${data.login}`);
})

// Task 7 : Use fetch API to get data using async/await

const apifetching = async () => {
    const response = await fetch('https://api.github.com/users/sandycody');
    const data = await response.json();
    console.log(`Data id is : ${data.id}`);
}

apifetching();
