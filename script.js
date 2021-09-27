// Variables for button and password characters
var userPassword = document.querySelector("#generate");
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["&", "(", ")", "*", "+", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
var password = "";
var chosenValues = [];

// Asks user about length of their password
function passwordOptions() {
  var length = parseInt(prompt("How many characters would you like in your password? You may choose between 8-128 characters."));
  if (length < 8 || length > 128) {
    alert("Password characters lengths must be between 8 and 128 characters.")
    return null;  
  }

//Asks user to choose character classes for their password
  var lowercase = confirm("Would you like lowercase characters in your password?");
  var uppercase = confirm("Would you like uppercase characters in your password?");
  var numeric = confirm("Would you like numeric characters in your password?");
  var special = confirm("Would you like special characters in your password? Examples: ? ! @ $");

  if (lowercase === false && uppercase === false && numeric === false && special === false) {
    alert("Please confirm at least one character class to generate your password.");
    return null;
  }

  if (lowercase === true) {
    password += randomChar(lowercaseChar);
    chosenValues = chosenValues.concat(lowercaseChar);
  }

  if (uppercase === true) {
    password += randomChar(uppercaseChar);
    chosenValues = chosenValues.concat(uppercaseChar);
  }
  
  if (numeric === true) {
    password += randomChar(numericChar);
    chosenValues = chosenValues.concat(numericChar);

  }
  if (special === true) {
    password += randomChar(specialChar);
    chosenValues = chosenValues.concat(specialChar);
  }

  console.log(password);
  console.log(chosenValues);
  for (var i = password.length; i < passLengthCon; i++) {
  password += randomChar(chosenValues);
  }

  return password;
  }

function randomChar(characterArray) {
  let runNumber = Math.floor(Math.random() * characterArray.length);
  return characterArray[runNumber];
}

var generateBtn = document.querySelector("#generate");

//This function will create the password based on the user's selections.
function generatePassword (){
 var yourPassword = passwordOptions();
 var yourText = document.querySelector("#securepassword");
 yourText.value = yourPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
