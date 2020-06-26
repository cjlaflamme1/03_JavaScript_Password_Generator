// Much of this script was inspired from Web Dev Simplified.

// Assignment Code
const generateBtn = document.querySelector("#generate");

const characterAmountSlider = document.getElementById('numberOfCharacterInputSlider');
const characterAmountNumber = document.getElementById('numberOfCharacterInputDigit');

const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz".split('');
const upperCaseChar = "ABCDEFGHIJKLMNOPQRESTUVWXYZ".split('');
const numberChar = "0123456789".split('');
const specialChar = "`~!@#$%^&*()-_=+[]\|}{',./<>?".split('');



characterAmountSlider.addEventListener('input', syncCharacterAmount);
characterAmountNumber.addEventListener('input', syncCharacterAmount);

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function syncCharacterAmount(i) {
  const value = i.target.value;
  characterAmountSlider.value = value;
  characterAmountNumber.value = value;
}