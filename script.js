// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = ["a","b"]
//create writePassword function
//create generatePassword

function passwordOptions() {
  var length = parseInt(prompt("How many characters would you like in your password? You may choose beteween 8-128 characters."));
  if (length < 8 || length > 128) {
    alert("Your password character length is invalid. Please choose a number of characters with more than 8 and less than 128 characters.")
    return null;  
  }
  var lowercase = confirm("Would you like lowercase characters in your password?")
  var uppercase = confirm("Would you like uppercase characters in your password?")
  var numeric = confirm("Would you like numeric characters in your password?")
  var special = confirm("Would you like special characters in your password? Examples: ? ! @ $")

  if (lowercase === false && uppercase === false && numeric === false && special === false) {
    alert("");
    return null;
  }

  var options ={
     length,
     lowercase,
     uppercase,
     numeric,
     special
  }

  return options;
}

function generatePassword (){
 var options = passwordOptions();



 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
