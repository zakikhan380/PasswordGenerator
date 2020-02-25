// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button

generateBtn.onclick = function(){
    var length = prompt("How many characters? 8 - 128")
    var lower = confirm("do you want lowercase letters?")
    var upper = confirm("do you want uppercase letters?")
    var number = confirm("do you want numbers?")
    var symbols = confirm("do you want symbols?")
    var password = ``;
    var funcArr = []
    
    function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
    function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        }
    function getRandomNumber() {
        return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        }
    function getRandomSymbol() {
        const symbols = '!@#$%^&*(){}[]=<>/,.'
        return symbols[Math.floor(Math.random() * symbols.length)];
        }
        
      if(lower == true){
        funcArr.push(getRandomLower);
      }
      if(upper == true){
        funcArr.push(getRandomUpper);
      }
      if(number == true){
        funcArr.push(getRandomNumber);
      }
      if(symbols == true){
        funcArr.push(getRandomSymbol);
      }
      console.log(getRandomLower());
      console.log(getRandomUpper());
      console.log(getRandomNumber());
      console.log(getRandomSymbol());
      
        for(var i = 0; i < length; i++){
            password += funcArr[Math.floor(Math.random() * funcArr.length)]()
            console.log(password)
      }
    alert("Your random password is" + password)
}