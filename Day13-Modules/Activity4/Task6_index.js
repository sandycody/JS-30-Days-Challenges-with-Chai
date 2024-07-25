const _ = require('lodash');

let users = [
    {
        user: "Kane",
        email: "kane@gmail.com"
    },

    {
        user: "Shivaji",
        email: "shivajiBoss@gmail.com"
    },

    {
        user: "Bruno",
        email: "bruno@gmail.com"
    }
]

const firstIndex = () => {
    const ind = _.findIndex(users, (elem) => {
        return elem.user == 'Shivaji';
    });
    return ind;
}

console.log(`The first index is : ${firstIndex()}`);

