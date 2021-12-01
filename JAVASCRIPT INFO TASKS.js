// javascript.info/variables tasks

// Working with variables

// Declare two variables: admin and name.
let admin;
let name;
// Assign the value "John" to name.
name = "John";
// Copy the value from name to admin.
admin = name;
// Show the value of admin using alert (must output “John”).
alert(admin);

// Giving the right name

// Create a variable with the name of our planet. How would you name such a variable?
let planet = "Earth";
// Create a variable to store the name of a current visitor to a website. How would you name that variable?
let user = "Current Visitor's Name";

// Uppercase const?

// Examine the following code:
const birthday = '18.04.1982';
const age = someCode(birthday);
// Here we have a constant birthday date and the age is calculated from birthday with the help of some code (it is not provided for shortness, and because details don’t matter here).

// Would it be right to use upper case for birthday? For age? Or even for both?

// My solution - It would be right for birthday, cause it won't change. But the age is constantly changing, so it would be right to write it with lowercase.

// const BIRTHDAY = '18.04.1982'; // yes?

// const AGE = someCode(BIRTHDAY); // no?
