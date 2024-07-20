// Task 5 : Spread Operator

const footballers = ["Cristiano Ronaldo", "Mbappe", "Messi"];


const new_array = [...footballers, "Karan Aujla", "Nijjar", "Sukha", "Tegi Pannu"];

console.log(new_array);

console.log();

// Task 6 : Rest operator

const sum = (...rest) => {
    let total = 0;
    for (let elem of rest) {
        total += elem;
    }
    return total;
}

const summation = sum(10, 20, 30, 40, 50);
console.log(`The summation is ${summation}`);