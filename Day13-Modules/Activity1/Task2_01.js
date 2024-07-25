const person = {
    name: "John Doe",
    age: 28,
    email: "john@gmail.com",
    hobby: function() {
        return `${this.name} is to sing.`;
    }
}

module.exports = { person };