// alert( null || 2 || undefined );
// 2

// alert( alert(1) || 2 || alert(3) );
// 1, 2

// alert( 1 && null && 2 );
// null

// alert( alert(1) && alert(2) );
// 1, undefined

// alert( null || 2 && 3 || 4 );
// 3

// Write an if condition to check that age is between 14 and 90 inclusively. “Inclusively” means that age can reach the edges 14 or 90.

let age;

if (age >= 14 && age <= 90) {
  alert("That's great!");
}

// Write an if condition to check that age is NOT between 14 and 90 inclusively. Create two variants: the first one using NOT !, the second one – without it.
// variant 1
if (!(age >= 14 && age <= 90)) {
  alert("That's even better!");
}
// variant 2
if (age < 14 || age > 90) {
  alert("That's even better!");
}

// if (-1 || 0) alert( 'first' ); Will alert
// if (-1 && 0) alert( 'second' ); Will not
// if (null || -1 && 1) alert( 'third' ); Will alert

// Write the code which asks for a login with prompt.
// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

let visitor = prompt("Please enter your username");
let adminPassword;
if (visitor == "Admin") {
  adminPassword = prompt("Please enter your password");

  if (adminPassword == "TheMaster") {
    alert("Welcome!");
  } else if (adminPassword == null || adminPassword == "") {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (visitor == null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
