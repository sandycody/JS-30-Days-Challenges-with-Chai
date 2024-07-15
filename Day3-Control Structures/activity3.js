// Task 4 : Determine day of week using switch statement

const number = 9;

switch (number) {
    case 1:
        console.log(`Monday`);
        break;

    case 2:
        console.log(`Tuesday`);
        break;
    
    case 3:
        console.log(`Wednesday`);
        break;

    case 4:
        console.log(`Thursday`);
        break;

    case 5:
        console.log(`Friday`);
        break;

    case 6:
        console.log(`Saturday`);
        break;
    
    case 7:
        console.log(`Sunday`);
        break;

    default:
        console.log(`Week day doesn't exist`);
}

// Task 5 : Assigning grades using switch statement

/* Note : 
    Switch (true)
    The fundamental principle of the switch true pattern is that the switch statement will match against expressions as well as values. An expression in a case will be evaluated before matching. If the expression in your case evaluates to true - it will be matched.
*/

const score = 86;

let grade = '';
switch (true) {
    case (score >= 90 && score <= 100):
        grade = 'A';
        break;

    case (score >= 80 && score < 90):
        grade = 'B';
        break;

    case (score >= 70 && score < 80):
        grade = 'C';
        break;

    case (score >= 60 && score < 70):
        grade = 'D';
        break;

    case (score >= 50 && score < 60):
        grade = 'E';
        break;

    case (score >= 40 && score < 50):
        grade = 'F';
        break;

    default:
        grade = 'grade does not exist';
}

console.log(`Student got ${grade} grade`);