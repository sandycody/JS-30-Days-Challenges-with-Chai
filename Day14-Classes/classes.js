/* Activity 1 : Class Definition */

// Task 1 : Create a class Person and add props, methods to it

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello ${this.name}, Good Morning dear!!`;
    }

    static greetMssg() {
        return `Good evening friends! Want some coffee?`;
    }
}

const p = new Person("Sandeep", 22);
console.log(p.greet()); //Hello Sandeep, Good Morning dear!!


// Task 2 : Add a method to the Person class that updates the age property

console.log(`The present age is ${p.age}`); //The present age is 22

Person.prototype.updateAge = function () {
    this.age += 5;
    return `My updated age becomes ${this.age}`;
}

console.log(p.updateAge()); //My updated age becomes 27


/* Activity 2 : Class Inheritance */

// Task 3 : Define a class Student that extends the Person class.

class Student extends Person {
    static studentCount = 0;

    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
        Student.studentCount++;
    }

    getStudentId() {
        return `The id of student is ${this.studentID}`;
    }

    greet() {
        return `Hello ${this.name}, your id is ${this.studentID}. Good to see you again!!`;
    }
}

const student = new Student('John', 20, '123');
console.log(student.getStudentId()); //The id of student is 123

// Task 4 : Override the greeting method in Student class

const person = new Person('Ankit', 25);
console.log(person.greet()); //Hello Ankit, Good Morning dear!!

const stu = new Student('Amar', 23, '100');
console.log(stu.greet()); //Hello Amar, your id is 100. Good to see you again!! (Overriden method)

/* 

Note : 

- When greet is called on an instance of Person, it uses the Person class's greet method.

- When greet is called on an instance of Student, it uses the Student class's greet method, which overrides the one from Person.

*/

/* Activity 3: Static Methods and Properties */

// Task 5 : Add a static method to Person class

const mssg = Person.greetMssg();
console.log(mssg); //Good evening friends! Want some coffee?

// Task 6 : Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

const student1 = new Student('Karan', 28, '4352');
const student2 = new Student('Nijjar', 23, '8331');
const student3 = new Student('Hargun', 30, '7065');

const totalStudents = Student.studentCount;
console.log(`The total number of students are ${totalStudents}`); //The total number of students are 5

/* Activity 4 : Getters and Setters */

class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [ firstName, lastName ] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Task 7 : Add a getter method to Person2 class

const per = new Person2("Sandeep", "Wadhawan");
console.log(`The full name is ${per.fullName}`); //The full name is Sandeep Wadhawan


// Task 8 : Add a setter method to Person2 class to update the name properties

const anotherPerson = new Person2("John", "Doe");
console.log(anotherPerson.fullName); //John Doe

anotherPerson.fullName = "James Phoenix";
console.log(`The updated name becomes ${anotherPerson.fullName}`);

/* Activity 5 : Private Fields (Optional) */

// Task 9 : Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    // Private field named 'balance'
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        } else {
            console.error(`Deposit amount must be positive`);
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.#balance) {
                this.#balance -= amount;
            } else {
                console.error(`Insufficient Withdrawal amount`);
            }
        } else {
            console.error(`Withdrawal amount must be positive`);
        }
    }

    getBalance() {
        return `The total balance is ${this.#balance}`;
    }
}

// Task 10 : Create an instance of Amount class and test the deposit and withdraw methods.

const acc = new Account(180);

acc.deposit(50);
console.log(acc.getBalance()); // The total balance is 230

acc.withdraw(40);
console.log(acc.getBalance()); // The total balance is 190

acc.withdraw(300); // Insufficient Withdrawal amount
console.log(acc.getBalance()); // The total balance is 190
