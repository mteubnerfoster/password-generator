// Listing out all variables that will be used in this file.
var lowercase;
var uppercase;
var numeric;
var specialChar;
var characterTypes = [];
var userPassword = [];
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "~!@#$%^&*?";
var userCharacter = [];

//This function will generate the random password for the user.
function generatePassword() {

  userPassword = [];
  userCharacter = [];
  characterTypes = [];
  lowercase = false;
  uppercase = false;
  numeric = false;
  specialChar = false;

//This prompts the user to choose their password length and sets the parameters for the password.
  var passwordLength = prompt("How long would you like your password to be? (8-128 characters)");
    if (isNaN(passwordLength)){
        alert("Password length must be a number. Please try again");
        return;
    }
    if (passwordLength === null) {
      return;
    }

//This alerts the user that they must choose between 8-128 characters for their password.
    if (passwordLength < 8 || passwordLength > 128) {
      var passwordLength = alert("Please choose between 8 and 128 characters for your password.");
      generatePassword();
      return;
    }

//This function asks the user what types of characters they would like to include in their password, and adds the user's choices to the pool.
  function characters() {
    userCharacter = [];
    lowercase = confirm("Click OK to include lowercase letters.");
      if (lowercase) {
        for (i = 0; i < lowercaseLetters.length; i++) {
          userCharacter.push(lowercaseLetters[i]);
        }
        characterTypes.push("Lowercase letters");
      }

    uppercase = confirm("Click OK to to include uppercase letters.");
      if (uppercase) {
        for (i = 0; i < uppercaseLetters.length; i++) {
          userCharacter.push(uppercaseLetters[i]);
          
        }
        characterTypes.push("Uppercase letters");
      }

    numeric = confirm("Click OK to include numbers.");
      if (numeric) {
        for (i = 0; i < numbers.length; i++) {
          userCharacter.push(numbers[i]);
        }
        characterTypes.push("Numbers");
      }

    specialChar = confirm("Click OK to include special characters. (Examples: ! @ # $)");
      if (specialChar) {
        for (i = 0; i < special.length; i++) {
          userCharacter.push(special[i]);
        }
        characterTypes.push("Special characters");
      }

// This alerts the user that they must select at least one character type for their password.
    if (lowercase === false && uppercase === false && numeric === false && specialChar === false) {
      alert("At least one character type must be selected. Press OK to try again");
      characters();
    }
  } 

  //Execute the function characters
  characters();

  userCharacter = userCharacter.join("");
  for (var i = 0; i < passwordLength; i++) {
    userPassword.push(userCharacter[Math.floor(Math.random() * userCharacter.length)]); 
  }

  return userPassword.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);