// the array of characters to build the password
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// set the amount of characters in the password
let passwordLength = 15;

// set the values of "boxOne-el" and "boxTwo-el" to variables in order to set the textContent
const boxOneEl = document.getElementById("boxOne-el");
const boxTwoEl = document.getElementById("boxTwo-el");

// pull between 10-15 random characters from the array with Math.random
function getRandomIndex() {
  // let randomCharacter = characters[(Math.floor(Math.random() * characters.length))];
  // return randomCharacter;

  let randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

// add each result to the textContent of the appropriate box, as there are 2 password results at a time
function generatePass(){
  boxOneEl.textContent = "";
  boxTwoEl.textContent = "";
  for(let i=0; i < passwordLength; i++){
    boxOneEl.textContent += getRandomIndex();
  };

  function genPassTwo() {
    for(let i=0; i < passwordLength; i++){
      boxTwoEl.textContent += getRandomIndex();
  }};

  genPassTwo();
}
function copyPasswordOne() {
  let copyText = boxOneEl.innerHTML;
  
  navigator.clipboard.writeText(copyText).then(() => {
    alert('Copied first password to clipboard');
  })
}

//! bonus: Add options to select/deselect symbols