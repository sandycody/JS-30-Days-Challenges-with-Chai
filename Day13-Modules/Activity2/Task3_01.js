const sub = (a, b) => {
    console.log(`${a} - ${b} = ${a - b}`);
}

const mul = (a, b) => {
    console.log(`${a} * ${b} = ${a * b}`);
}

const div = (a, b) => {
    console.log(`${a} - ${b} = ${a / b}`);
}

const sq = (a) => {
    console.log(`${a}\u00B2 = ${a * a}`);
}

module.exports = { sub, mul, div, sq };