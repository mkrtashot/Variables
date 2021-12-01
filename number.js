// Create a script that prompts the visitor to enter two numbers and then shows their sum.
let firstNumber = +prompt("Please enter the first value");
let secondNumber = +prompt("Please enter the second value");

alert(`Your summery is ${firstNumber + secondNumber}`);

// Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
// The resulting value must be returned as a number.
// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.
let numberOrNot;
function readNumber() {
  do {
    numberOrNot = prompt("Enter a number please?", 0);
  } while (!isFinite(numberOrNot));
}
readNumber();
if (numberOrNot == null || numberOrNot == "") {
  alert("null");
} else if (isFinite(numberOrNot)) {
  alert(`Yes, ${numberOrNot} is a number`);
}
