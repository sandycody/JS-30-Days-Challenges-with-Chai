// Task 9 : Higher Order Function 1

const nTimes = 5;

function callFunction(nTimes) {
   console.log(`Executed ${nTimes}`);
}

function hof1(func, n) {
    for (let i = 1; i <= n; i++) {
        func(i);
    }
}

hof1(callFunction, nTimes);

console.log();


// Task 10 : Higher Order Function 2

function hof2(func1, func2, val) {
    const res1 = func1(val);
    const res2 = func2(res1);
    return res2;
}

const add = (x) => x + 10;
const sq = (x) => x * x;

const finalRes = hof2(sq, add, 4);
console.log(finalRes); // 26