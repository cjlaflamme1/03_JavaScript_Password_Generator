
// Assignment Code
const generateBtn = document.querySelector("#generate");
// Character amount information
const characterAmountSlider = document.getElementById('numberOfCharacterInputSlider');
const characterAmountNumber = document.getElementById('numberOfCharacterInputDigit');
// Possible password content arrays
const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz".split('');
const upperCaseChar = "ABCDEFGHIJKLMNOPQRESTUVWXYZ".split('');
const numberChar = "0123456789".split('');
const specialChar = "`~!@#$%^&*()-_=+[]\|}{',./<>?".split('');


// Sync of character amount slider and number input.  I found this method form Web Dev Simplified.
characterAmountSlider.addEventListener('input', syncCharacterAmount);
characterAmountNumber.addEventListener('input', syncCharacterAmount);

function syncCharacterAmount(i) {
  const value = i.target.value;
  characterAmountSlider.value = value;
  characterAmountNumber.value = value;
}

function generatePassword() {
  // Checkbox confirmations: Checked or not checked? 
  const includeLowerCase = document.getElementById("lowerCaseCharInput").checked;
  const includeUpperCase = document.getElementById("upperCaseCharInput").checked;
  const includeNumbers = document.getElementById("numberCharInput").checked;
  const includeSpecialChars = document.getElementById("specialCharInput").checked;

  // assessment of how many characters checked.
  const charAmount = characterAmountNumber.value;
  console.log(charAmount);

  // Prevents passwords being too long or too short.
  switch(true) {
    case (charAmount < 8):
    case (charAmount > 128):
      alert("Number of Characters restriced to 8-128");
      return;
  }

  // Prenvents passwords with no characters!
  if ((includeLowerCase !== true) && (includeUpperCase !== true) && (includeNumbers !== true) && (includeSpecialChars !== true)) {
    alert("You must select a character type");
    return;
  }


  // final password selection array and final password
  let passwordArray = [];
  const password = [];

  switch(includeLowerCase) {
    case true:
      passwordArray = passwordArray.concat(lowerCaseChar);
      break;
  }
  switch(includeUpperCase) {
    case true:
      passwordArray = passwordArray.concat(upperCaseChar);
      break;
  }
  switch(includeNumbers) {
    case true:
      passwordArray = passwordArray.concat(numberChar);
      break; 
  }
  switch(includeSpecialChars) {
    case true:
      passwordArray = passwordArray.concat(specialChar);
      break;
  }

  console.log(passwordArray);

  // for loop that generates password
  for(i = 0; i < charAmount; i++) {
    password.push(passwordArray[Math.floor(Math.random() * passwordArray.length)])
  }
  // converts password into a string, removing the commas.
  const finalPassword = password.join('');
  // returns the password
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
