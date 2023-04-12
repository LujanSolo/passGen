  //* the array of characters to build the password
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


  //* a new array is set to a constant, built by filtering through the characters array and implementing a regular expression (regEx) to return only alphabetical characters
const lettersOnlyArray = characters.filter(char => /^[a-z]+$/i.test(char));
console.log(lettersOnlyArray);
        //! regEx details: ^: Matches the start of the string.
        //! [a-z]+: Matches one or more characters that are within the range of "a" through "z" (lowercase only).
        //! $: Matches the end of the string.
        //! /i: Makes the regex case-insensitive, so it will match uppercase and lowercase letters.



  //* set the values of "boxOne-el" and "boxTwo-el" to variables in order to set the textContent
const boxOneEl = document.getElementById("boxOne-el");
const boxTwoEl = document.getElementById("boxTwo-el");


  //* set password length to call function to get user's selected value
let passwordLength = updateOption(); 


  //* function to return the value of the user's password length selection
function updateOption() {
  const userChoiceEl = document.getElementById("user-choice");
  const passwordLength = userChoiceEl.value;
  return passwordLength;
};


  //* function to pull a random index from the characters array
function getRandomIndex() {
  let randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];

  //! another way to write it:
  // let randomCharacter = characters[(Math.floor(Math.random() * characters.length))];
  // return randomCharacter;
};


//* function to add each result to the textContent of the appropriate box, as there are 2 password results at a time
function generatePass(){
  passwordLength = updateOption(); // set password length based on user's choice
  boxOneEl.textContent = "";  // clear out both boxes so text doesn't overlap on each button click
  boxTwoEl.textContent = "";

  // for loop continuously adds values from chracters array to box, based on password length
  for(let i=0; i < passwordLength; i++){
    boxOneEl.textContent += getRandomIndex();
  };

  // method within generatePass() that automatically generates a second password with one click
  function genPassTwo() {

    // for loop continuously adds values from chracters array to box, based on password length
    for(let i=0; i < passwordLength; i++){
      boxTwoEl.textContent += getRandomIndex();
  }};
  // call the method
  genPassTwo();
};


//* function to copy passwordOne to clipboard
function copyPasswordOne() {
  let copyText = boxOneEl.innerHTML;

  navigator.clipboard.writeText(copyText).then(() => {
    alert('Copied first password to clipboard');
  })
};

//* function to copy passwordTwo to clipboard
function copyPasswordTwo() {
  let copyText = boxTwoEl.innerHTML;

  navigator.clipboard.writeText(copyText).then(() => {
    alert('Copied second password to clipboard');
  })
};