// Task 9 : Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). 

const password = "9Okm@123#";

let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':",.<>/?])(?!.*\s).{8,}$/g;

let isValid = password.match(regex);

if (isValid) {
    console.log("Password is valid");
} else {
    console.log("Password is Invalid");
}

console.log();

// Task 10 : Write a regular expression to validate a URL.

const URL = "https://github.com/users/sandycody";
regex = /^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,}(\/[\w-]*)*(\?[;&a-z=\d%_]*)?(\#[\w-]*)?$/gi;

isValid = URL.match(regex);

if (isValid) {
    console.log(`URL is valid.`);
} else {
    console.log(`URL is invalid.`);
}