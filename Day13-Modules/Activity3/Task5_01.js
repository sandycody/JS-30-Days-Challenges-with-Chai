const number = 20;
const string = "John Doe";

const greet = (str) => {
    console.log(`Hi ${str}, Good morning!`);
}

const applyMap = (arr) => {
    let nums = [];
    arr.map(elem => {
        nums.push(elem * 3);
    });
    console.log(nums);
}

module.exports = { 
    num: number, 
    str: string, 
    greet,
    operateArr: applyMap 
}