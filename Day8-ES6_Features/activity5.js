// Task 8 : Using Enhanced Object literal

// Properties
const id = 100;
const position = "Junior Developer";
const experience = "9 months";
const salary = 400000;

// Method
const vision = () => {
    return (`Work on techincal skills and take experience from seniors.`);
}

const employee = { id, position, experience, salary, vision };

console.log(employee);
console.log(employee.vision());

console.log();

// Task 9 : Create an object with computed property names based on variables and log the object to the console

const propName1 = "name";
const propName2 = "age";
const propName3 = "hobby";

const person = {
    [propName1]: "Karim Benzema",
    [propName2]: 28,
    [propName3]: "Footballer"
}

console.log(person);


