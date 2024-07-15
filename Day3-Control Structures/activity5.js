// Task 7 : Checking of a leap year

const year = 2012;

let isLeap = false;

if (year % 4 == 0) {
    // Century year or not
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            isLeap = !isLeap;
        }
    } else {
        isLeap = !isLeap;
    }
}

if (isLeap) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}