// Task 5 : Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890)

const phoneFormat = "(123) 456-7890";
let regex = /\((\d{3})\)\s(\d{3})-(\d{4})/g;

console.log(phoneFormat.match(regex));

console.log();

// Task 6 : Write a regular expression to capture the username and domain from an email address.

const email = "sandeep2001@gmail.com";
regex = /([^@]+)/g;

let matching = email.match(regex);

if (matching) {
    let username = matching[0];
    let domain = matching[1];
    console.log(`Username : ${username}`);
    console.log(`Domain : ${domain}`);
} else {
    console.log("matching did't take place or invalid email address");
}