// Inserting all possible characters into arrays
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specials = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '`', '{', '|', '}', '~'];
const lcLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const ucLetters = ['A', 'B', 'C', 'D', 'E', 'F' ,'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function userInput() {
    var characterNumber = prompt("How many characters would you like in your password?");

    while (characterNumber < 8 || characterNumber > 128) {
        alert("Your password must have between 8 and 128 characters.");
        delete characterNumber;
        var characterNumber = prompt("How many characters would you like in your password?");
    }

    var lowercase = confirm("Would you like to include lowercase letters in your password?");
    var uppercase = confirm("Would you like to include uppercase letters in your password?");
    var numeric = confirm("Would you like to include numbers in your password?");
    var special = confirm("Would you like to include special characters in your password?");

    while (numeric === false && special === false && lowercase ===false && uppercase ===false) {
        alert("Select at least one type of character for your password.");
        delete lowercase;
        delete uppercase;
        delete numeric;
        delete special;

        var lowercase = confirm("Would you like lowercase letters in your password?");
        var uppercase = confirm("Would you like uppercase letters in your password?");
        var numeric = confirm("Would you like numbers in your password?");
        var special = confirm("Would you like special characters in your password? Examples: ! @ # $");
    }
    
    let availChar = []
        
    if (numeric) {
        availChar.push(...numbers);
    } 
    
    if (special) {
        availChar.push(...specials);
    }

    if (lowercase) {
        availChar.push(...lcLetters);
    }

    if (uppercase) {
        availChar.push(...ucLetters);
    }
    
    document.getElementById("password").innerHTML = makePassword(characterNumber, availChar);
}

function makePassword(characterNumber, availChar) {
    var text = "";
    
    for (var i = 0; i < characterNumber; i++) {
        var j = Math.floor(Math.random() * availChar.length);
        text += availChar[j];
    }

    return text;
}