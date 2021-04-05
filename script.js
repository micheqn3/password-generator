var generateBtn = document.querySelector("#generate"); // Assignment Code

// Creates arrays holding letters, numbers, and special characters
const upperCaseAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCaseAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "~"]; 
var userCriteria; // used to store arrays of criteria choices combined
function writePassword() { // Write password to the #password input
  var password = startGame();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Create function generatePassword that will return a new password
function startGame() {
  var userInput = prompt("How many characters do you want in the password?");
  if (userInput >=  8 && userInput <= 128) { // Validate user input
    alert("Awesome! Now choose at least one of the next 4 criteria.");
    var userUpperCase = prompt("Do you want uppercase characters? Type 1 for yes and 0 for no.");
    var userLowerCase = prompt("Do you want lowercase characters? Type 1 for yes and 0 for no.");
    var userNumbers = prompt("Do you want numbers? Type 1 for yes and 0 for no.");
    var userSpecial = prompt("Do you want special characters? Type 1 for yes or 0 for no.");

    if (userUpperCase === "0" && userLowerCase === "0" && userNumbers === "0" && userSpecial === "0") {
      alert("You have to choose at least one criteria. Please try again."); // Makes sure at least one criteria is chosen

    } else if (userUpperCase === "1" && userLowerCase === "1" && userNumbers === "1" && userSpecial === "1") {
      console.log("I'm here!11");
      userCriteria = upperCaseAlph.concat(lowerCaseAlph, numbers, specialCharacters); // if all are chosen 
    
    } else if (userUpperCase === "1" && userLowerCase === "1") {
      console.log("I'm here!5");
      userCriteria = upperCaseAlph.concat(lowerCaseAlph); // Concat method will combine all of these arrays into one array
    
    } else if (userUpperCase === "1" && userNumbers === "1") {
      console.log("I'm here!6");
      userCriteria = upperCaseAlph.concat(numbers);
    
    } else if (userUpperCase === "1" && userSpecial === "1") {
      console.log("I'm here!7");
      userCriteria = upperCaseAlph.concat(specialCharacters);
    
    } else if (userLowerCase === "1" && userNumbers === "1") {
      console.log("I'm here!8");
      userCriteria = lowerCaseAlph.concat(numbers);
    
    } else if (userLowerCase === "1" && userSpecial === "1") {
      console.log("I'm here!9");
      userCriteria = lowerCaseAlph.concat(specialCharacters);
    
    } else if (userNumbers === "1" && userSpecial === "1") {
      console.log("I'm here!10");
      userCriteria = numbers.concat(specialCharacters);
    
    } else if (userUpperCase === "1" && userLowerCase === "1" && userNumbers === "1") {
      console.log("I'm here!12");
      userCriteria = upperCaseAlph.concat(lowerCaseAlph, numbers);
    
    } else if (userUpperCase === "1" && userLowerCase === "1" && userSpecial === "1") {
      console.log("I'm here!13");
      userCriteria = upperCaseAlph.concat(lowerCaseAlph, specialCharacters);
    
    } else if (userLowerCase === "1" && userNumbers === "1" && userSpecial === "1") {
      console.log("I'm here!14");
      userCriteria = lowerCaseAlph.concat(numbers, specialCharacters);
      
    } else if (userSpecial === "1" && userNumbers === "1" && userUpperCase === "1") {
      console.log("I'm here!15");
      userCriteria = specialCharacters.concat(numbers, upperCaseAlph);
    
    } else if (userUpperCase === "1") {
      console.log("I'm here! 1");
      userCriteria = upperCaseAlph;

    } else if (userLowerCase === "1") {
      console.log("I'm here! 2");
      userCriteria = lowerCaseAlph;

    } else if (userNumbers === "1") {
      console.log("I'm here!3");
      userCriteria = numbers;
    
    } else if (userSpecial === "1") {
      console.log("I'm here!4");
      userCriteria = specialCharacters; 
    }
    var newPassword = []; // variable that will hold array
    for (var i = 0; i < userInput; i++) { // Makes sure it will loop and will be less characters than the chosen user input
    var pickChoices = userCriteria[Math.floor(Math.random() * userCriteria.length)];
    newPassword.push(pickChoices); // pushes each into the newPassword array
    }
    var joinPassword = newPassword.join(""); // So there are no commas between the numbers
    return joinPassword;

  } else {
    alert("You didn't type in a number between 8 and 128. Goodbye."); // Will end the function if user doesn't choose a number between 8 and 128.
    return "Please type in a number between 8 and 128.";
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // When user clicks the button, writePassword() is called

