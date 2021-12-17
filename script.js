// Assignment code here
const characterAmountNumberElement = document.getElementById("characterAmountNumber")
const LowercaseElemement = document.getElementById("includeLowercase")
const UppercaseElement = document.getElementById("includeUppercase")
const NumberElement = document.getElementById("includeNumbers")
const SpecialCharacterElement = document.getElementById("includeSpecialCharacters")
const chacterAmountRangeElement = document.getElementById("characterAmountRange")

const randomFunction = {
  lower: getRandomLowercase,
  upper: getRandomUppercase,
  number: getRandomNumber,
  SpecialCharacter: getRandomSpecialCharacter
};

function getRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecialCharacter() {
  const SpecialCharacter = "~`!@#$%^&*()_-+={[}]|\:'<,>.?/";
  return SpecialCharacter[Math.floor(Math.random() * symbols.legnth)];
}

var generateBtn = document.querySelector("#generate");

var password = document.getElementById("password"); 

function generatePassword(lower, upper, number, SpecialCharacter, characterAmountNumber){
  var fromCharCode = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_-+={[}]|\}:'<,.>?/"
  var passwordLegnth = 18;
  var password = "";

  for (var i = 0; i <= passwordLegnth; i++){
    var randomNumber = Math.floor(Math.random() * fromCharCode.length);
    password += fromCharCode.substring(randomNumber, randomNumber +1);
  }

  document.getElementById("password").value = password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  const characterAmountNumber = +characterAmountNumberElement.value;
  const hasLower = LowercaseElemement.checked;
  const hasUpper = UppercaseElement.checked;
  const hasNumber = NumberElement.checked;
  const hasSpecialCharacter = SpecialCharacterElement.checked;

  generatePassword(hasLower, hasUpper, hasNumber, hasSpecialCharacter);
});